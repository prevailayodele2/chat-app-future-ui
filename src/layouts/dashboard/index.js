import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Switch,
  Tooltip,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Logo from '../../assets/Images/logo.ico';
import { Nav_Buttons, Profile_Menu } from '../../data';
import { Gear } from 'phosphor-react';
import { useState } from 'react';
import { faker } from '@faker-js/faker';
import useSettings from './../../hooks/useSettings';

const DashboardLayout = () => {
  const theme = useTheme();

  const [selected, setSelected] = useState(0);

  const { onToggleMode } = useSettings();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: '0px 0px 2px rgba(0,0,0,0.35)',
          height: '100vh',
          width: 100,
        }}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent={'space-between'}
          spacing={3}
          sx={{ height: '100%' }}
        >
          <Stack spacing={4} alignItems={'center'}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}
            >
              <img src={Logo} alt="Treasure Chat Logo" />
            </Box>
            <Stack
              spacing={3}
              alignItems="center"
              direction={'column'}
              sx={{ width: 'max-content' }}
            >
              {Nav_Buttons.map((ic) =>
                ic.index === selected ? (
                  <Tooltip title={ic.tooltip} placement="right">
                    <Box
                      p={1}
                      sx={{
                        borderRadius: 1.5,
                        backgroundColor: theme.palette.primary.main,
                      }}
                    >
                      <IconButton
                        sx={{ width: 'max-content', color: '#fff' }}
                        key={ic.index}
                      >
                        {ic.icon}
                      </IconButton>
                    </Box>
                  </Tooltip>
                ) : (
                  <IconButton
                    onClick={() => {
                      setSelected(ic.index);
                    }}
                    sx={{
                      width: 'max-content',
                      color:
                        theme.palette.mode === 'light'
                          ? '#000'
                          : theme.palette.text.primary,
                    }}
                    key={ic.index}
                  >
                    {ic.icon}
                  </IconButton>
                )
              )}
              <Divider sx={{ width: '48px' }} />
              {selected === 3 ? (
                <Box
                  p={1}
                  sx={{
                    borderRadius: 1.5,
                    backgroundColor: theme.palette.primary.main,
                  }}
                >
                  <IconButton sx={{ width: 'max-content', color: '#fff' }}>
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  sx={{
                    width: 'max-content',
                    color:
                      theme.palette.mode === 'light'
                        ? '#000'
                        : theme.palette.text.primary,
                  }}
                  onClick={() => {
                    setSelected(3);
                  }}
                >
                  <Gear />
                </IconButton>
              )}
            </Stack>
          </Stack>
          <Stack spacing={4}>
            <AntSwitch
              onChange={() => {
                onToggleMode();
              }}
            />
            <Avatar
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              cursor="pointer"
              src={faker.image.avatar()}
            />
            <Menu
              id="basic-menu"
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal:'right'
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              anchorEl={anchorEl}
            >
              <Stack spacing={1} px={1}>
                {Profile_Menu.map((e, i) => (
                  <MenuItem key={i} onClick={handleClick}>
                    <Stack
                      sx={{ width: '100%' }}
                      direction="row"
                      gap={'20px'}
                      alignItems={'center'}
                      justifyContent="space-between"
                    >
                      <span>{e.title}</span>
                      {e.icon}
                    </Stack>
                  </MenuItem>
                ))}
              </Stack>
            </Menu>
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

export default DashboardLayout;
