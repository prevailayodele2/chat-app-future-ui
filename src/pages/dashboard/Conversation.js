import React from 'react';
import { Box, Stack } from '@mui/material';
import ChatHeader from '../../Components/Chat/Header';
import Footer from '../../Components/Chat/Footer';
import Message from './Message';

const Conversation = () => {
  return (
    <Stack height={'100%'} maxHeight="100vh" width={'100%'}>
      <ChatHeader />
      <Box width={'100%'} sx={{ flexGrow: 1, overflowY: 'scroll' }}>
        <Message />
      </Box>
      <Footer />
    </Stack>
  );
};

export default Conversation;
