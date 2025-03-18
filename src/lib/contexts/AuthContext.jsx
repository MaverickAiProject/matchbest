"use client"

import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
            setIsLoading(false)
        });
        return () => unsubscribe();
    }, []);

    // const handleSignInWithGoogle = async () => {
    //     setIsLoading(true)
    //     try {
    //         await signInWithPopup(auth, new GoogleAuthProvider())
    //     } catch (error) {
    //         setError(error?.message)
    //     }
    //     setIsLoading(false)
    // }

    const handleSignInWithEmail = async (email, password) => {
        setIsLoading(true)
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setError("Invalid email or password");
            console.log(error.message)
        }
        setIsLoading(false)
    }

    const handleLogout = async () => {
        setIsLoading(true)
        try {
            await signOut(auth)
        } catch (error) {
            setError(error?.message)
        }
        setIsLoading(false)
    }

    return <AuthContext.Provider
        value={{
            user,
            isLoading,
            error,
            // handleSignInWithGoogle,
            handleLogout,
            handleSignInWithEmail
        }}
    >
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);