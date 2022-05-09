import React, { useState, useContext, useEffect } from 'react';
import { provider } from 'firebase.js';
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    const loginWithGoogle = async () => {
        return await signInWithPopup(auth, provider).then((result) => {
            setCurrentUser(result.user);
        });
    };

    const createUser = async (email, password, displayName, photoURL) => {
        return await createUserWithEmailAndPassword(auth, email, password).then((result) => {
            setCurrentUser(result.user);
            updateProfile(result.user, {
                displayName: displayName,
            });
        });
    };

    const login = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password).then((result) => {
            setCurrentUser(result.user);
        });
    };

    const logout = async () => {
        return await signOut(auth).catch((err) => {
            console.log(err.message);
        });
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, [auth]);

    const value = {
        currentUser,
        loginWithGoogle,
        createUser,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
