import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const MyContext = createContext()
const auth = getAuth(app)
 const AuthContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading]= useState(true)
    const googleProvider = new GoogleAuthProvider()
    const creteUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const createGoogle =()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const loginUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unsubscribe()
        }
    },[])
    const userInfo = {
        user,
        creteUser,
        auth,
        loginUser,
        loading,
        logOut,
        createGoogle
    
    }
    return (
        <div>
             <MyContext.Provider value={userInfo}>
                {children}
            </MyContext.Provider>
        </div>
    );
};

export default AuthContext;