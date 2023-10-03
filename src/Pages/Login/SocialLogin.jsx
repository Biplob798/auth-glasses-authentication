import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSocialLogin = (media) => {
    media()
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="divider">continue with</div>
      <div className="flex justify-between">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-neutral btn-sm"
        >
          Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn btn-neutral btn-sm"
        >
          Github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
