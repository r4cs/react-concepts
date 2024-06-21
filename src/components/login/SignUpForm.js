import React, { useState } from 'react';
import { Button, Grid, Link, Avatar, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { registerWithEmailAndPassword } from '../../services/Auth';
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

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: '',
    });
    const [errors, setErrors] = useState({});
    const [registerError, setRegisterError] = useState('');

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
        tempErrors.username = formData.username ? '' : 'Username is required';
        setErrors(tempErrors);
        return Object.values(tempErrors).every((x) => x === '');
    };

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                await registerWithEmailAndPassword(formData.email, formData.password, formData.username);
                console.log("Registration successful!");
                navigate("/login");
            } catch (error) {
                console.error('Erro ao registrar:', error.message);
                setRegisterError('Failed to register. Please try again.');
            }
        }
    };

    return (
        <CustomContainer component="main" maxWidth="xs">
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign Up
            </Typography>
            <CustomForm noValidate onSubmit={handleSubmit}>
                <CustomTextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    value={formData.username}
                    onChange={handleChange}
                    error={!!errors.username}
                    helperText={errors.username}
                />
                <CustomTextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
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
                {registerError && (
                    <Typography color="error" variant="body2">
                        {registerError}
                    </Typography>
                )}
                <CustomButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Sign Up
                </CustomButton>
                <Grid container>
                    <Grid item>
                        <Link href="/login" variant="body2">
                            {"Already have an account? Sign In"}
                        </Link>
                    </Grid>
                </Grid>
            </CustomForm>
        </CustomContainer>
    );
};

export default SignUpForm;


// components/login/SignUpForm.js
//
// import React, { useState } from 'react';
// import { Button, TextField, Grid, Link, Avatar, Typography, Container } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { registerWithEmailAndPassword } from '../../services/Auth';
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
// const SignUpForm = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//         username: '',
//     });
//     const [errors, setErrors] = useState({});
//     const [registerError, setRegisterError] = useState(''); // Estado para armazenar erros de registro
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
//         tempErrors.username = formData.username ? '' : 'Username is required';
//         setErrors(tempErrors);
//         return Object.values(tempErrors).every((x) => x === '');
//     };
//
//     const navigate = useNavigate();
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (validate()) {
//             try {
//                 await registerWithEmailAndPassword(formData.email, formData.password, formData.username);
//                 console.log("Registration successful!");
//                 navigate("/login");
//             } catch (error) {
//                 console.error('Erro ao registrar:', error.message);
//                 setRegisterError('Failed to register. Please try again.');
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
//                 Sign Up
//             </Typography>
//             <CustomForm noValidate onSubmit={handleSubmit}>
//                 <TextField
//                     variant="outlined"
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="username"
//                     label="Username"
//                     name="username"
//                     autoComplete="username"
//                     autoFocus
//                     value={formData.username}
//                     onChange={handleChange}
//                     error={!!errors.username}
//                     helperText={errors.username}
//                 />
//                 <TextField
//                     variant="outlined"
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="email"
//                     label="Email Address"
//                     name="email"
//                     autoComplete="email"
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
//                 {registerError && (
//                     <Typography color="error" variant="body2">
//                         {registerError}
//                     </Typography>
//                 )}
//                 <CustomButton
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     color="primary"
//                 >
//                     Sign Up
//                 </CustomButton>
//                 <Grid container>
//                     <Grid item>
//                         <Link href="/login" variant="body2">
//                             {"Already have an account? Sign In"}
//                         </Link>
//                     </Grid>
//                 </Grid>
//             </CustomForm>
//         </CustomContainer>
//     );
// };
//
// export default SignUpForm;
