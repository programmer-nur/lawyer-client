import React, { createContext, useState } from 'react';
import app from '../Firebase/firebase';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'

export const MyContext = createContext()
const auth = getAuth(app)
 const AuthContext = ({children}) => {
    const [user, setUser] = useState(null)

    const creteUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const userInfo = {
        user,
        creteUser,
        loginUser
    
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