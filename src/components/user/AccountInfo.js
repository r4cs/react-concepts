import React, { useEffect, useState } from 'react';
import { Typography, Button, Paper } from '@mui/material';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import {deleteUserAccount} from "../../services/Auth";

const ContentContainer = styled.div`
    padding: 20px;
`;

const AccountInfo = () => {
    const { currentUser, logout } = useAuth();
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(currentUser);
        console.log('AccountInfo useEffect, currentUser:', currentUser);
    }, [currentUser]);

    const handleDelete = async () => {
        try {
            await deleteUserAccount();
            console.log('Usuário deletado!');
        } catch (error) {
            console.error('Erro ao fazer logout:', error.message);
        }
    };

    return (
        <ContentContainer>
            <Typography variant="h5" gutterBottom>
                My Account Info
            </Typography>
            <Paper elevation={3} style={{padding: '20px', marginBottom: '20px'}}>
                {user ? (
                    <>
                        <Typography variant="body1" gutterBottom>
                            <strong>Email:</strong> {user.email}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <strong>Username:</strong> {user.displayName}
                        </Typography>
                        <Button variant="contained" color="primary">
                            Update Account Info
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleDelete}
                            style={{marginLeft: '10px'}}
                        >
                            Delete account
                        </Button>
                    </>
                ) : (
                    <Typography variant="body1" gutterBottom>
                        Loading...
                    </Typography>
                )}
            </Paper>
        </ContentContainer>
    );
};

export default AccountInfo;




// // components/user/AccountInfo.js
//
// import React, { useEffect, useState } from 'react';
// import { Typography, Button, Paper } from '@mui/material';
// import styled from 'styled-components';
// import { useAuth } from '../../contexts/AuthContext';
//
// const ContentContainer = styled.div`
//     padding: 20px;
// `;
//
// const AccountInfo = () => {
//     const {getCurrentUser, logout} = useAuth();
//     const [currentUser, setCurrentUser] = useState(null);
//
//     useEffect(() => {
//         const user = getCurrentUser();
//         setCurrentUser(user);
//         console.log('AccountInfo useEffect, currentUser:', user);
//     }, []);
//
//     const handleLogout = async () => {
//         try {
//             await logout();
//             console.log('Logout bem-sucedido!');
//         } catch (error) {
//             console.error('Erro ao fazer logout:', error.message);
//         }
//     };
//
//     return (
//         <ContentContainer>
//             <Typography variant="h5" gutterBottom>
//                 My Account Info
//             </Typography>
//             <Paper elevation={3} style={{padding: '20px', marginBottom: '20px'}}>
//                 {currentUser ? (
//                     <>
//                         <Typography variant="body1" gutterBottom>
//                             <strong>Email:</strong> {currentUser.email}
//                         </Typography>
//                         <Typography variant="body1" gutterBottom>
//                             <strong>Username:</strong> {currentUser.username}
//                         </Typography>
//                         <Button variant="contained" color="primary">
//                             Update Account Info
//                         </Button>
//                         <Button
//                             variant="contained"
//                             color="secondary"
//                             onClick={handleLogout}
//                             style={{marginLeft: '10px'}}
//                         >
//                             Logout
//                         </Button>
//                     </>
//                 ) : (
//                     <Typography variant="body1" gutterBottom>
//                         Loading...
//                     </Typography>
//                 )}
//             </Paper>
//         </ContentContainer>
//     )
// }
//
// export default AccountInfo;