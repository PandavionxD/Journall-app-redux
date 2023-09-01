import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { NavBar,Sidebar } from '../componets'

const withComponent = 240

export const JournallLayout = ({children}) => {
    
  return (
    <Box sx={{ display: "flex" }} className="animate__animated animate__fadeIn animate__faster"  >
      {/* NAVBAR */}
        <NavBar withComponent={withComponent}  />
      {/* SIDEBAR */}
        <Sidebar  withComponent={withComponent} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* TOOLBAR */}
      <Toolbar/>
        {children}
      </Box>
    </Box>
  )
}
