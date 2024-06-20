import React, { createContext, useState, useContext, useEffect } from 'react';
import {
    signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
    signOut as firebaseSignOut,
    onAuthStateChanged,
    updateEmail,
    updateProfile,
    deleteUser as firebaseDeleteUser,
    sendEmailVerification,
} from 'firebase/auth';

import { auth } from '../services/Firebase';

const AuthContext = createContext('');

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    const isAuthenticated = () => {
        return !!currentUser;
    };

    const login = async (email, password) => {
        try {
            const user = await firebaseSignInWithEmailAndPassword(auth, email, password);
            return user;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await firebaseSignOut(auth);
            setCurrentUser(null);
        } catch (error) {
            console.error('Logout error:', error);
            throw error;
        }
    };

    const updateUserProfile = async (email, username) => {
        try {
            if (currentUser) {
                if (username) {
                    await updateProfile(currentUser, { displayName: username });
                }
                if (email && email !== currentUser.email) {
                    await sendEmailVerification(currentUser);
                    setCurrentUser({ ...currentUser, email });
                    return 'Verification email sent. Please verify your new email.';
                }
            } else {
                throw new Error('No user is currently signed in.');
            }
        } catch (error) {
            console.error('Update user error:', error);
            throw error;
        }
    };

    const updateEmailAfterVerification = async (email) => {
        try {
            if (currentUser) {
                await updateEmail(currentUser, email);
                setCurrentUser({ ...currentUser, email });
            } else {
                throw new Error('No user is currently signed in.');
            }
        } catch (error) {
            console.error('Update email error:', error);
            throw error;
        }
    };

    const deleteUserAccount = async () => {
        try {
            if (currentUser) {
                await firebaseDeleteUser(currentUser);
                setCurrentUser(null);
            } else {
                throw new Error('No user is currently signed in.');
            }
        } catch (error) {
            console.error('Delete user error:', error);
            throw error;
        }
    };

    const value = {
        currentUser,
        isAuthenticated,
        login,
        logout,
        updateUserProfile,
        updateEmailAfterVerification,
        deleteUserAccount,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};