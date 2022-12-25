import { Box, Stack } from '@mui/material';
import React from 'react';
import Chat from './Chat';
import Conversation from './Conversation';
import { useTheme } from '@mui/material/styles';
import Contact from '../../Components/Contact';
import { useSelector } from 'react-redux';

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store)=> store.app )
  return (
    <Stack direction={'row'} sx={{ width: '100%' }}>
      <Chat />
      <Box
        sx={{
          height: '100%',
          width: sidebar.open ? 'calc(100vw - 820px)' : 'calc(100vw - 450px)',
          backgroundColor:
            theme.palette.mode === 'light'
              ? '#F0F4FA'
              : theme.palette.background.paper,
        }}
      >
        <Conversation />
      </Box>
      {sidebar.open && <Contact />}
    </Stack>
  );
};

export default GeneralApp;
