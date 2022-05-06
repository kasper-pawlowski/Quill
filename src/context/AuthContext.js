import React, { useState, useContext, useEffect } from 'react';
import { auth, provider } from 'firebase.js';
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    function loginWithGoogle() {
        return signInWithPopup(auth, provider)
            .then((result) => {
                setCurrentUser(result.user);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function createUser(email, password, displayName, photoURL) {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                updateProfile(result.user, {
                    displayName: displayName,
                    photoURL: photoURL,
                });
                setCurrentUser(result.user);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setCurrentUser(result.user);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function logout() {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        loginWithGoogle,
        createUser,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
