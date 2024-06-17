// utils/firebaseUtils.js

import { getCurrentUser } from '../services/Auth';

export const isAuthenticated = () => {
    const user = getCurrentUser();
    return !!user;
};

export const getCurrentUserId = () => {
    const user = getCurrentUser();
    return user ? user.uid : null;
};
