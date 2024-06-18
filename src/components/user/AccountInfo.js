import React, { useEffect, useState } from 'react';
import { Typography, Button, Paper, TextField } from '@mui/material';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import {deleteUserAccount, updateUserData} from "../../services/Auth";
// import { useNavigate } from 'react-router-dom';

const ContentContainer = styled.div`
    padding: 20px;
`;

const AccountInfo = () => {
    const { currentUser } = useAuth();
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [displayName, setDisplayName] = useState('');
    // const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            setUser(currentUser);
            setEmail(currentUser.email);
            setDisplayName(currentUser.displayName);
            console.log("AccountInfo useEffect, currentUser: ", currentUser)
        }
    }, [currentUser]);

    const handleUpdate = async () => {
        try {
            await updateUserData( { email, displayName } );
            console.log('User updated successfully');
        } catch (error) {
            console.error('Error updating user:', error.message);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteUserAccount();
            console.log('User deleted successfully');
            // navigate('/');
        } catch (error) {
            console.error('Error deleting user:', error.message);
        }
    };

    return (
        <ContentContainer>
            <Typography variant="h5" gutterBottom>
                My Account Info
            </Typography>
            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                {user ? (
                    <>
                        <TextField
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Username"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <Button variant="contained" color="primary" onClick={handleUpdate}>
                            Update Account Info
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleDelete}
                            style={{ marginLeft: '10px' }}
                        >
                            Delete Account
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


// import React, { useEffect, useState } from 'react';
// import { Typography, Button, Paper } from '@mui/material';
// import styled from 'styled-components';
// import { useAuth } from '../../contexts/AuthContext';
// import {deleteUserAccount} from "../../services/Auth";
//
// const ContentContainer = styled.div`
//     padding: 20px;
// `;
//
// const AccountInfo = () => {
//     const { currentUser, logout } = useAuth();
//     const [user, setUser] = useState(null);
//
//     useEffect(() => {
//         setUser(currentUser);
//         console.log('AccountInfo useEffect, currentUser:', currentUser);
//     }, [currentUser]);
//
//     const handleDelete = async () => {
//         try {
//             await deleteUserAccount();
//             console.log('Usuário deletado!');
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
//                 {user ? (
//                     <>
//                         <Typography variant="body1" gutterBottom>
//                             <strong>Email:</strong> {user.email}
//                         </Typography>
//                         <Typography variant="body1" gutterBottom>
//                             <strong>Username:</strong> {user.displayName}
//                         </Typography>
//                         <Button variant="contained" color="primary">
//                             Update Account Info
//                         </Button>
//                         <Button
//                             variant="contained"
//                             color="secondary"
//                             onClick={handleDelete}
//                             style={{marginLeft: '10px'}}
//                         >
//                             Delete account
//                         </Button>
//                     </>
//                 ) : (
//                     <Typography variant="body1" gutterBottom>
//                         Loading...
//                     </Typography>
//                 )}
//             </Paper>
//         </ContentContainer>
//     );
// };
//
// export default AccountInfo;