// components/profile/EmailVerificationPage.js

import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const EmailVerificationPage = () => {
    const { updateEmailAfterVerification } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [message, setMessage] = useState('');

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const email = query.get('email');

        if (email) {
            updateEmailAfterVerification(email)
                .then(() => {
                    setMessage('Email updated successfully.');
                    navigate('/profile');
                })
                .catch(error => {
                    setMessage(`Error updating email: ${error.message}`);
                });
        } else {
            setMessage('Invalid verification link.');
        }
    }, [location, updateEmailAfterVerification, navigate]);

    return (
        <div>
            <h2>Email Verification</h2>
            <p>{message}</p>
        </div>
    );
};

export default EmailVerificationPage;
