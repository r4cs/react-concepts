// PasswordRecoveryLink.js
import React from 'react';
import { Link } from '@mui/material';

const PasswordRecoveryLink = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <Link to="/password-recovery">Forgot your password?</Link>
        </div>
    );
};

export default PasswordRecoveryLink;
