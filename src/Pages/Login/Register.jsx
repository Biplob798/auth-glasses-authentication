import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // get field value
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const img = e.target.img.value;

    // create a new user

    createUser(email, password)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((error) => console.log(error));

    console.log(email, password, name, img);
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image Url</span>
                  </label>
                  <input
                    type="text"
                    name="img"
                    placeholder="image url"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Your password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6 p-0">
                  <button className="btn btn-neutral" type="submit">
                    Register
                  </button>
                </div>
                <label className="label">
                  Have an account?{" "}
                  <Link to="/login" className="label-text-alt link link-hover">
                    Please Login
                  </Link>
                </label>
                <SocialLogin />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
