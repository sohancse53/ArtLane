import React, { useEffect, useState } from 'react';
import Authcontext from './Authcontext';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase.config';
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
     const updateUser =(object)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,object);
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }


    const logIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    // observer 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
            

        });
        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo = {
        setUser,
        user,
        createUser,
        updateUser,
        logOut,
        logIn,
        googleLogin,
        loading
    }


    
    return (
       <Authcontext value={authInfo}>{children}</Authcontext>
    );
};

export default AuthProvider;