import React from 'react'
import DashboardLayout from './layouts/dashboard'
import { Box } from '@mui/material';

const Main = () => {
  return (
    <Box sx={{display: 'flex'}}>
      <DashboardLayout />
    </Box>
  )
}

export default Main
