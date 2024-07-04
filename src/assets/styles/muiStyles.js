// muiStyles.js

import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const CustomTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: theme.palette.mode === 'dark' ? '#555' : '#ccc',
        },
        '&:hover fieldset': {
            borderColor: theme.palette.mode === 'dark' ? '#777' : '#aaa',
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.mode === 'dark' ? '#aaa' : '#555',
        },
    },
    '& input': {
        color: theme.palette.mode = '#555',
    },
}));
