import { Box } from '@mui/material'
import React from 'react'
import { NavBar } from '../componets'

const withComponent = 240

export const JournallLayout = ({children}) => {
    
  return (
    <Box sx={{ display: "flex" }}>
        <NavBar withComponent={withComponent}  />
      {/* SIDEBAR */}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* TOOLBAR */}

        {children}
      </Box>
    </Box>
  )
}
