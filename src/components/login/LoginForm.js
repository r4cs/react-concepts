import React, { useState } from 'react';
import { Button, Link, Avatar, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { signInWithEmailAndPassword } from '../../services/Auth';
import { useNavigate } from 'react-router-dom';
import { CustomTextField } from '../../assets/styles/muiStyles'; // Importando os estilos customizados

const CustomContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

const CustomForm = styled('form')(({ theme }) => ({
    width: '100%',
    marginTop: theme.spacing(1),
}));

const CustomButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(3, 0, 2),
}));

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [loginError, setLoginError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? '' : 'Email is not valid';
        tempErrors.password = formData.password.length > 5 ? '' : 'Password must be at least 6 characters long';
        setErrors(tempErrors);
        return Object.values(tempErrors).every((x) => x === '');
    };

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                await signInWithEmailAndPassword(formData.email, formData.password);
                console.log("Login successful!");
                navigate("/dashboard");
            } catch (error) {
                console.error('Erro ao fazer login:', error.message);
                setLoginError('Failed to sign in. Please check your credentials and try again.');
            }
        }
    };

    return (
        <CustomContainer component="main" maxWidth="xs">
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <CustomForm noValidate onSubmit={handleSubmit}>
                <CustomTextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                />
                <CustomTextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                    error={!!errors.password}
                    helperText={errors.password}
                />
                {loginError && (
                    <Typography color="error" variant="body2">
                        {loginError}
                    </Typography>
                )}
                <CustomButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Sign In
                </CustomButton>
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <Link href="/sign-up" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </div>
            </CustomForm>
        </CustomContainer>
    );
};

export default LoginForm;



// components/login/LoginForm.js
//
// import React, { useState } from 'react';
// import { Button, TextField, Link, Avatar, Typography, Container } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { signInWithEmailAndPassword } from '../../services/Auth';
// import { useNavigate } from 'react-router-dom';
//
// const CustomContainer = styled(Container)(({ theme }) => ({
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
// }));
//
// const CustomForm = styled('form')(({ theme }) => ({
//     width: '100%',
//     marginTop: theme.spacing(1),
// }));
//
// const CustomButton = styled(Button)(({ theme }) => ({
//     margin: theme.spacing(3, 0, 2),
// }));
//
// const LoginForm = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//     });
//     const [errors, setErrors] = useState({});
//     const [loginError, setLoginError] = useState(''); // Estado para armazenar erros de login
//
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };
//
//     const validate = () => {
//         let tempErrors = {};
//         tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? '' : 'Email is not valid';
//         tempErrors.password = formData.password.length > 5 ? '' : 'Password must be at least 6 characters long';
//         setErrors(tempErrors);
//         return Object.values(tempErrors).every((x) => x === '');
//     };
//
//     const navigate = useNavigate();
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (validate()) {
//             try {
//                 await signInWithEmailAndPassword(formData.email, formData.password);
//                 console.log("Login successful!");
//                 navigate("/dashboard")
//                 // Implemente o redirecionamento para o dashboard ou outra página aqui
//             } catch (error) {
//                 console.error('Erro ao fazer login:', error.message);
//                 setLoginError('Failed to sign in. Please check your credentials and try again.');
//             }
//         }
//     };
//
//     return (
//         <CustomContainer component="main" maxWidth="xs">
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                 <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//                 Sign in
//             </Typography>
//             <CustomForm noValidate onSubmit={handleSubmit}>
//                 <TextField
//                     variant="outlined"
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="email"
//                     label="Email Address"
//                     name="email"
//                     autoComplete="email"
//                     autoFocus
//                     value={formData.email}
//                     onChange={handleChange}
//                     error={!!errors.email}
//                     helperText={errors.email}
//                 />
//                 <TextField
//                     variant="outlined"
//                     margin="normal"
//                     required
//                     fullWidth
//                     name="password"
//                     label="Password"
//                     type="password"
//                     id="password"
//                     autoComplete="current-password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     error={!!errors.password}
//                     helperText={errors.password}
//                 />
//                 {loginError && (
//                     <Typography color="error" variant="body2">
//                         {loginError}
//                     </Typography>
//                 )}
//                 <CustomButton
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     color="primary"
//                 >
//                     Sign In
//                 </CustomButton>
//                 <div style={{textAlign: 'center', marginTop: '10px'}}>
//                     <Link href="/sign-up" variant="body2">
//                         {"Don't have an account? Sign Up"}
//                     </Link>
//                 </div>
//             </CustomForm>
//         </CustomContainer>
//     );
// };
//
// export default LoginForm;
