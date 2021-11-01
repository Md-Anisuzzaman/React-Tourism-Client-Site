import React, { useEffect, useState } from 'react';

import {getAuth, GoogleAuthProvider,signInWithPopup, onAuthStateChanged,signOut } from "firebase/auth";
import intializeFirebaseApp from '../Fiebase/Firebase-init';


intializeFirebaseApp();


const useFirebase = () => {

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const [user,setUser]=useState({});
    const [error,setError]=useState("");


    
    const handleGooglesignin = () => {

        // signInWithPopup(auth, provider)
        return signInWithPopup(auth, provider);

        // .then((result) => {
        //    setUser(result.user)
        // });
    
    }


    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
                setError("");
            }
        });

    }, [])


    
    const logOut = () => {
        signOut(auth)
            .then(() => setUser({}))
            .catch(() => setError(error.message));
           
        //sessionStorage.removeItem("email");
    }


    return {
        user,
        handleGooglesignin,
        logOut

       
    };
};

export default useFirebase;