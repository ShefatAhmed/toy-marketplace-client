import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config'
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, createUserWithEmailAndPassword,  onAuthStateChanged,  signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth , email, password)
    };
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email, password)
    };
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            return unsubscribe();
        }
    }, [])
    const authValue = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle
    };
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;