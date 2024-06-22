import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Button, Box, Typography } from '@mui/material';
import { CustomTextField } from '../../assets/styles/muiStyles';

const AccountInfo = () => {
    const { currentUser, updateUserProfile } = useAuth();
    const [name, setName] = useState(currentUser.displayName || '');
    const [email, setEmail] = useState(currentUser.email || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUserProfile({ displayName: name, email });
            alert('Profile updated successfully');
        } catch (error) {
            alert('Failed to update profile: ' + error.message);
        }
    };

    return (
        <Box sx={{ padding: 3, display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: '400px' }}>
                <Typography variant="h5" gutterBottom align="center">
                    Account Information
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <CustomTextField
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            variant="outlined"
                            size="medium"
                            fullWidth
                        />
                        <CustomTextField
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="outlined"
                            size="medium"
                            fullWidth
                        />
                        <Button type="submit" variant="contained" color="primary">
                            Update Profile
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default AccountInfo;


// import React, { useState } from 'react';
// import { useAuth } from '../../contexts/AuthContext';
// import { TextField, Button, Box, Typography } from '@mui/material';
//
// const AccountInfo = () => {
//     const { currentUser, updateUserProfile } = useAuth();
//     const [name, setName] = useState(currentUser.displayName || '');
//     const [email, setEmail] = useState(currentUser.email || '');
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await updateUserProfile({ displayName: name, email });
//             alert('Profile updated successfully');
//         } catch (error) {
//             alert('Failed to update profile: ' + error.message);
//         }
//     };
//
//     return (
//         <Box sx={{ padding: 3, display: 'flex', justifyContent: 'center' }}>
//             <Box sx={{ width: '100%', maxWidth: '400px' }}>
//                 <Typography variant="h5" gutterBottom align="center">
//                     Account Information
//                 </Typography>
//                 <form onSubmit={handleSubmit}>
//                     <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//                         <TextField
//                             label="Name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             variant="outlined"
//                             size="medium"
//                             fullWidth
//                         />
//                         <TextField
//                             label="Email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             variant="outlined"
//                             size="medium"
//                             fullWidth
//                         />
//                         <Button type="submit" variant="contained" color="primary">
//                             Update Profile
//                         </Button>
//                     </Box>
//                 </form>
//             </Box>
//         </Box>
//     );
// };
//
// export default AccountInfo;