import React, { createContext, useState, useContext, useEffect } from 'react';
import {
    signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
    signOut as firebaseSignOut,
    getAuth,
    onAuthStateChanged,
    updateEmail,
    updateProfile,
    deleteUser as firebaseDeleteUser
} from 'firebase/auth';
import { auth } from '../services/Firebase';
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext('');

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    // const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            console.log('Auth state changed, user:', user);
        });

        return unsubscribe;
    }, []);

    const isAuthenticated = () => {
        return !!currentUser;
    };

    const login = async (email, password) => {
        try {
            const user = await firebaseSignInWithEmailAndPassword(auth, email, password);
            console.log('Login successful, user:', user);
            return user;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await firebaseSignOut(auth);
            console.log('Logout successful');
            setCurrentUser(null);
        } catch (error) {
            console.error('Logout error:', error);
            throw error;
        }
    };

    const updateUser = async (email, username) => {
        try {
            if (currentUser) {
                await updateEmail(currentUser, email);
                await updateProfile(currentUser, { displayName: username });
                console.log('User updated successfully');
                setCurrentUser({ ...currentUser, email, displayName: username });
            } else {
                throw new Error('No user is currently signed in.');
            }
        } catch (error) {
            console.error('Update user error:', error);
            throw error;
        }
    };

    const deleteUserAccount = async () => {
        try {
            if (currentUser) {
                await firebaseDeleteUser(currentUser);
                console.log('User deleted successfully');
                setCurrentUser(null);
                // navigate('/');
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
        updateUser,
        deleteUserAccount
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// import React, { createContext, useState, useContext, useEffect } from 'react';
// import { signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword, signOut as firebaseSignOut, deleteUser as firebaseDeleteUser, getAuth, onAuthStateChanged } from 'firebase/auth';
// // import { useNavigate } from 'react-router-dom';
// import { auth } from '../services/Firebase';
//
// const AuthContext = createContext('');
//
// export const useAuth = () => {
//     return useContext(AuthContext);
// };
//
// export const AuthProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null);
//     // const navigate = useNavigate();
//
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             setCurrentUser(user);
//             console.log('Auth state changed, user:', user);
//         });
//
//         return unsubscribe;
//     }, []);
//
//     const isAuthenticated = () => {
//         return !!currentUser;
//     };
//
//     const login = async (email, password) => {
//         try {
//             const user = await firebaseSignInWithEmailAndPassword(auth, email, password);
//             console.log('Login successful, user:', user);
//             return user;
//         } catch (error) {
//             console.error('Login error:', error);
//             throw error;
//         }
//     };
//
//     const logout = async () => {
//         try {
//             await firebaseSignOut(auth);
//             console.log('Logout successful');
//             setCurrentUser(null) // atualiza o estado
//         } catch (error) {
//             console.error('Logout error:', error);
//             throw error;
//         }
//     };
//
//     const deleteAccount = async () => {
//         try {
//             const user = getAuth().currentUser;
//             if (user) {
//                 await firebaseDeleteUser(user);
//                 console.log('Delete account successful');
//                 setCurrentUser(null);
//                 // navigate('/'); // Redirecionar para a página principal após a exclusão da conta
//             }
//         } catch (error) {
//             console.error('Delete account error:', error);
//             throw error;
//         }
//     };
//
//
//     // useEffect(() => {
//     //     if (!currentUser) {
//     //         navigate("/");
//     //     }
//     // }, [currentUser, navigate]);
//
//     const value = {
//         currentUser,
//         isAuthenticated,
//         login,
//         logout,
//         deleteAccount
//     };
//
//     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };


// // contexts/AuthContext.js
//
// import React, { createContext, useState, useContext, useEffect } from 'react';
// import { signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword, signOut as firebaseSignOut, getCurrentUser as firebaseGetCurrentUser } from '../services/Auth';
// import { isAuthenticated as checkIsAuthenticated } from '../utils/FirebaseUtils';
// // import {useNavigate} from "react-router-dom";
//
//
// const AuthContext = createContext('');
//
// export const useAuth = () => {
//     return useContext(AuthContext);
// }
//
// export const AuthProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null);
//
//     useEffect(() => {
//         const user = firebaseGetCurrentUser();
//         if (user) {
//             setCurrentUser(user);
//             console.log('User found in useEffect:', user);
//         } else {
//             console.log('No user found in useEffect');
//         }
//     }, []);
//
//     const isAuthenticated = () => {
//         const authenticated = checkIsAuthenticated();
//         console.log('isAuthenticated called, result:', authenticated);
//         return authenticated;
//     };
//
//     const login = async (email, password) => {
//         try {
//             const user = await firebaseSignInWithEmailAndPassword(email, password);
//             setCurrentUser(user);
//             console.log('Login successful, user:', user);
//             return user;
//         } catch (error) {
//             console.error('Login error:', error);
//             throw error;
//         }
//     };
//     const logout = async () => {
//         try {
//             await firebaseSignOut();
//             setCurrentUser(null);
//             console.log('Logout successful');
//         } catch (error) {
//             console.error('Logout error:', error);
//             throw error;
//         }
//     };
//
//     const getCurrentUser = () => {
//         console.log('getCurrentUser called, currentUser:', currentUser);
//         return currentUser;
//     };
//
//     const value = {
//         currentUser,
//         isAuthenticated,
//         login,
//         logout,
//         getCurrentUser,
//     };
//
//     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };
