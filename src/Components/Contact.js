import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { ToggleSidebar } from '../redux/slices/app';
import { faker } from '@faker-js/faker';
import AntSwitch from './AntSwitch';

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <div>
      <Box sx={{ height: '100vh', width: 370 }}>
        <Stack sx={{ height: '100%' }}>
          <Box
            sx={{
              boxShadow: '0px 0px 2px rgba(0 ,0, 0 ,0.25)',
              width: '100%',
              backgroundColor:
                theme.palette.mode === 'light'
                  ? '#f8faff'
                  : theme.palette.background,
            }}
          >
            <Stack
              direction={'row'}
              sx={{ height: '100%', p: 2 }}
              alignItems="center"
              justifyContent={'space-between'}
              spacing={3}
            >
              <Typography variant="subtitle2">Contact Info</Typography>
              <IconButton
                onClick={() => {
                  dispatch(ToggleSidebar());
                }}
              >
                <X />
              </IconButton>
            </Stack>
          </Box>
          <Stack
            sx={{
              height: '100%',
              position: 'relative',
              flexGrow: 1,
              overflowY: 'scroll',
            }}
            p={3}
            spacing={3}
          >
            <Stack alignItems={'center'} direction={'row'} spacing={2}>
              <Avatar
                src={faker.image.avatar()}
                alt={faker.name.firstName()}
                sx={{ height: '64px', width: '64px' }}
              />
              <Stack spacing={0.5}>
                <Typography variant="article" fontWeight={600}>
                  {faker.name.fullName()}
                </Typography>
                <Typography variant="body2" fontWeight={500}>
                  {'+234 813 4760 438'}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              alignItems={'center'}
              justifyContent="space-evenly"
            >
              <Stack spacing={1} alignItems="center">
                <IconButton>
                  <Phone />
                </IconButton>
                <Typography variant="overline">Voice</Typography>
              </Stack>
              <Stack spacing={1} alignItems="center">
                <IconButton>
                  <VideoCamera />
                </IconButton>
                <Typography variant="overline">Video</Typography>
              </Stack>
            </Stack>
            <Divider />
            <Stack spacing={0.5}>
              <Typography variant="article">About</Typography>
              <Typography variant="body2">
                Don't wait for rock bottom
              </Typography>
            </Stack>
            <Divider />
            <Stack
              direction={'row'}
              alignItems="center"
              justifyContent={'space-between'}
            >
              <Typography variant="subtitle2">Media Links and docs</Typography>
              <Button endIcon={<CaretRight />}>400</Button>
            </Stack>
            <Stack direction={'row'} spacing={2} alignItems="center">
              {[1, 2, 3].map((el) => (
                <Box>
                  <img src={faker.image.food()} alt={faker.name.fullName()} />
                </Box>
              ))}
            </Stack>
            <Divider />
            <Stack
              direction={'row'}
              alignItems="center"
              justifyContent={'space-between'}
            >
              <Stack direction={'row'} alignItems={2} spacing={2}>
                <Star size={22} />
                <Typography variant="subtitle2">Starred Messages</Typography>
              </Stack>
              <IconButton>
                <CaretRight />
              </IconButton>
            </Stack>
            <Divider />
            <Stack
              direction={'row'}
              alignItems="center"
              justifyContent={'space-between'}
            >
              <Stack direction={'row'} alignItems={2} spacing={2}>
                <Bell size={22} />
                <Typography variant="subtitle2">Mute Notification</Typography>
              </Stack>
              <IconButton>
                <AntSwitch />
              </IconButton>
            </Stack>
            <Divider />
            <Typography variant=''>1 group in common</Typography>
            <Stack direction={'row'} spacing={2} alignItems='center'>
                <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
                <Stack spacing={0.6}>
                    <Typography variant='subtitle2'>Treasure's Treasure</Typography>
                    <Typography variant='caption' >Goat, Bot, Iwe, Agba</Typography>
                </Stack>
            </Stack>
            <Stack direction={'row'} alignItems='center' spacing={2}>
                <Button  startIcon={<Prohibit />} fullWidth variant='outlined'>Block</Button>
                <Button startIcon={<Trash />} fullWidth variant='outlined'>Delete</Button>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default Contact;
