import React, { createContext, useEffect, useState } from "react";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase_config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // google login

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // github login

  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // sing up

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sing in user
  const singin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // profile update

  // const handleUpdateProfile = (name, photo) => {
  //   return updateProfile(auth.currentUser, {
  //     displayName: name,
  //     photoURL: photo,
  //   });
  // };

  // logout user

  const logOut = () => {
    return signOut(auth);
  };

  // using observer

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  // useEffect(() => {
  //   const unSubscribe = onAuthStateChanged(auth, (user) => {
  //     setUser(user);
  // setLoading(false);
  //   });
  //   return unSubscribe()
  // }, []);

  const authentications = {
    user,
    googleLogin,
    githubLogin,
    createUser,
    singin,
    logOut,
    handleUpdateProfile,
    loading,
  };

  return (
    <AuthContext.Provider value={authentications}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// 1.___ createContext by AuthContext
// 2.___ export korte hobe
// 3.___ AuthContext ke mul component ar modhe rakhete hobe
// 4.___ Ar shathe .Provider add kora
// 5.___ sathe value = {} banano
// 6.___ AuthProvider ar prop hishabe {children} banano
// 7.___ children bananor por ta AuthContext ar paytter moddhe rakha
// 8.___ value={} ar moddhe google theke ja aynbo ta input korbo value ar moddhe
// 9.___ main.jsx a <AuthProvider></AuthProvider> ar moddhe RouterProvider ke add kora
