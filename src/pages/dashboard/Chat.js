import React from 'react';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from '@mui/material';
import { styled, alpha, useTheme } from '@mui/material/styles';
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';
import { faker } from '@faker-js/faker';
import { ChatList } from '../../data';
import { SimpleBarStyle } from '../../Components/Scrollbar';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
    const theme = useTheme()
  return (
    <Box
      p={2}
      sx={{
        width: '100%',
        borderRadius: 1,
        backgroundColor: theme.palette.mode === 'light' ? '#fff' : theme.palette.background.default,
      }}
    >
      <Stack
        direction={'row'}
        alignItems="center"
        justifyContent={'space-between'}
        key={id}
      >
        <Stack direction={'row'} spacing={2}>
          {online ? (
            <StyledBadge
              variant="dot"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              overlap="circular"
            >
              <Avatar src={img} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems="center">
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge color="primary" badgeContent={unread}></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.default, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
}));

const SearchWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1rem + ${theme.spacing(4)})`,
    width: '100%',
  },
}));

const Chat = () => {
    const theme = useTheme()
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: 350,
        boxShadow: '0px 0px 3px rqba(0, 0, 0, 0.25)',
        backgroundColor: theme.palette.mode === 'light' ?  '#f8faff' : theme.palette.background.paper,
      }}
    >
      <Stack p={3} spacing={2} sx={{ height: '100vh' }}>
        <Stack
          direction={'row'}
          alignItems="center"
          justifyContent={'space-between'}
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack sx={{ width: '100%' }}>
          <Search>
            <SearchWrapper>
              <MagnifyingGlass color="#709ce6" />
            </SearchWrapper>
            <StyledInputBase placeholder="Search..." />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction={'row'} alignItems="center" spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack
          direction={'column'}
          sx={{ flexGrow: 1, overflowY: 'scroll', height: '100%' }}
        >
          <SimpleBarStyle timeout={500} clickOnTrack={false}>
            <Stack spacing={2}>
              <Typography variant="subtitle2" sx={{ color: '#676767' }}>
                Pinned
              </Typography>
              {ChatList.filter((fl) => fl.pinned).map((al) => {
                return <ChatElement {...al} />;
              })}
            </Stack>
            <br />
            <Stack spacing={2}>
              <Typography variant="subtitle2" sx={{ color: '#676767' }}>
                All Chats
              </Typography>
              {ChatList.filter((fl) => !fl.pinned).map((al) => {
                return <ChatElement {...al} />;
              })}
            </Stack>
          </SimpleBarStyle>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chat;
