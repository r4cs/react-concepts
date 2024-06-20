// components/login/PasswordRecoveryLink.js
import React, { useState } from 'react';
import { Link as RouterLink } from '@mui/material';
import PasswordRecoveryForm from './PasswordRecoveryForm';

const PasswordRecoveryLink = () => {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
            {showForm ? (
                <PasswordRecoveryForm />
            ) : (
                <RouterLink component="button" onClick={toggleForm} variant="body2">
                    Forgot your password?
                </RouterLink>
            )}
        </div>
    );
};

export default PasswordRecoveryLink;
