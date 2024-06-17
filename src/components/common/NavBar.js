import React from 'react';
import { AppBar, Toolbar, Button, Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Logo = styled('img')({
    width: '50px',
    cursor: 'pointer',
});

const NavBar = () => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    console.log('NavBar render, currentUser:', currentUser);

    const handleLogout = async () => {
        try {
            await logout();
            console.log('Logout bem-sucedido!');
            navigate("/");
        } catch (error) {
            console.error('Erro ao fazer logout:', error.message);
        }
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#1976d2', px: 2 }}>
            <Container>
                <Toolbar disableGutters>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                            <Logo src="/images/logo.jpeg" alt="Logo" />
                        </Box>
                    </Link>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ ml: 2 }}>
                        {currentUser ? (
                            <Button color="inherit" onClick={handleLogout}>
                                Logout
                            </Button>
                        ) : (
                            <Button color="inherit" component={Link} to="/login">
                                Login
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;


// // components/common/NavBar.js
//
// import React from 'react';
// import { AppBar, Toolbar, Button, Container, Box } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import {Link, useNavigate} from 'react-router-dom';
// import { useAuth } from '../../contexts/AuthContext';
//
// const Logo = styled('img')({
//     width: '50px',
//     cursor: 'pointer',
// });
//
// const NavBar = () => {
//     const { currentUser, logout } = useAuth();
//     const navigate = useNavigate()
//
//     console.log('NavBar render, currentUser:', currentUser);
//
//     const handleLogout = async () => {
//         try {
//             await logout();
//             console.log('Logout bem-sucedido!');
//             navigate("/")
//
//         } catch (error) {
//             console.error('Erro ao fazer logout:', error.message);
//         }
//     };
//
//     return (
//         <AppBar position="static" sx={{ backgroundColor: '#1976d2', px: 2 }}>
//             <Container>
//                 <Toolbar disableGutters>
//                     <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
//                         <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
//                             <Logo src="/images/logo.jpeg" alt="Logo" />
//                         </Box>
//                     </Link>
//                     <Box sx={{ flexGrow: 1 }} />
//                     <Box sx={{ ml: 2 }}>
//                         {currentUser ? (
//                         // {isAuthenticated() ? (
//                             <Button color="inherit" onClick={handleLogout}>
//                                 Logout
//                             </Button>
//                         ) : (
//                             <Button color="inherit" component={Link} to="/login">
//                                 Login
//                             </Button>
//                         )}
//                     </Box>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// };
//
// export default NavBar;
