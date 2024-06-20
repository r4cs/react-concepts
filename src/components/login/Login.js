// Login.js
import React, { useEffect } from 'react';
import LoginForm from './LoginForm';
import PasswordRecoveryLink from './PasswordRecoveryLink';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated()) {
            navigate('/dashboard');
        }
    }, [isAuthenticated, navigate]);
    return (
        <div>
            <LoginForm />
            <PasswordRecoveryLink />
        </div>
    );
};

export default Login;
