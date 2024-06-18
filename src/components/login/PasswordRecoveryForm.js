// components/login/PasswordRecoveryForm.js
import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAuth } from '../../contexts/AuthContext';

const CustomForm = styled('form')(({ theme }) => ({
    width: '100%',
    marginTop: theme.spacing(1),
}));

const CustomButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(3, 0, 2),
}));

const PasswordRecoveryForm = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const { sendPasswordResetEmail } = useAuth();

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(email);
            setMessage('Password reset email sent. Check your inbox.');
            setError('');
        } catch (error) {
            setError('Failed to send reset email. Please check your email and try again.');
            setMessage('');
        }
    };

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Forgot your password?
            </Typography>
            <CustomForm onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={handleChange}
                />
                <CustomButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Reset Password
                </CustomButton>
                {error && (
                    <Typography color="error" variant="body2">
                        {error}
                    </Typography>
                )}
                {message && (
                    <Typography color="success" variant="body2">
                        {message}
                    </Typography>
                )}
            </CustomForm>
        </div>
    );
};

export default PasswordRecoveryForm;
