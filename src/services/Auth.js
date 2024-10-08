// services/Auth.js

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword as firebaseSignIn,
    signOut as firebaseSignOut,
    getAuth,
    deleteUser,
    updateEmail,
    updateProfile} from "firebase/auth";
import { ref, set, update } from "firebase/database";
import { auth, database } from "./Firebase";

export const registerWithEmailAndPassword = async (email, password, username) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await set(ref(database, 'users/' + user.uid), {
            username: username,
            email: email,
        });
        console.log('User registered successfully:', user);
        return user;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
};

export const signInWithEmailAndPassword = async (email, password) => {
    try {
        const userCredential = await firebaseSignIn(auth, email, password);
        console.log('User signed in successfully:', userCredential.user);
        return userCredential.user;
    } catch (error) {
        console.error('Sign-in error:', error);
        throw error;
    }
};

export const signOut = async () => {
    try {
        await firebaseSignOut(auth);
        console.log('User signed out successfully');
    } catch (error) {
        console.error('Sign-out error:', error);
        throw error;
    }
};

export const getCurrentUser = () => {
    const user = getAuth().currentUser;
    console.log('getCurrentUser called, user:', user);
    return user;
};

export const updateUserData = async ({ email, displayName }) => {
    const user = getAuth().currentUser;
    if (user) {
        if (email && email !== user.email) {
            await updateEmail(user, email);
        }
        if (displayName && displayName !== user.displayName) {
            await updateProfile(user, { displayName });
        }
        // Atualizando no Realtime Database
        const updates = {};
        if (email) {
            updates['/users/' + user.uid + '/email'] = email;
        }
        if (displayName) {
            updates['/users/' + user.uid + '/username'] = displayName;
        }
        await update(ref(database), updates);

        console.log('User data updated successfully');
    } else {
        throw new Error('No user is currently signed in.');
    }
};
export const deleteUserAccount = async () => {
    const user = getAuth().currentUser;
    if (user) {
        await deleteUser(user);
        console.log('User deleted successfully');
    } else {
        throw new Error('No user is currently signed in.');
    }
};
