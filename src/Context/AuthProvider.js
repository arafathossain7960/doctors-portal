import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,} from "firebase/auth";

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);
const auth = getAuth(app);

// create User
const createUser =(email, password)=>{
    setLoading(true);
    return  createUserWithEmailAndPassword(auth, email, password);
}

// login user
const loginUser = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
}

// sign out user
const loginOut = ()=>{
    setLoading(true);
    return signOut(auth);
}
// current user 
useEffect(()=>{
 const unsubscribe  =  onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false);
    })
    return unsubscribe();
},[])

    const authInfo ={user, loading, loginOut, createUser, loginUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;