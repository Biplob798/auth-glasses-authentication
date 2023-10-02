import React, { createContext } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase_config";

export const AuthContext = createContext([]);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
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

  const authentications = {
    googleLogin,
    createUser,
    singin,
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
