import React, { createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase_config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // google login

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // sing up

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sing in user
  const singin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout user

  const logOut = () => {
    return signOut(auth);
  };

  // using observer

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  // useEffect(() => {
  //   const unSubscribe = onAuthStateChanged(auth, (user) => {
  //     setUser(user);
  //   });
  //   return unSubscribe()
  // }, []);

  console.log(user);

  const authentications = {
    user,
    googleLogin,
    createUser,
    singin,
    logOut,
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
