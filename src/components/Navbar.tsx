import {Box, styled, Typography} from '@mui/material'
import React from 'react'

// style of the Navbar 
const NavbarBox = styled(Box)(({theme}) => ({
  background: '#f1f1f1',
  width: '100%',
  height: '100px',
  "& .brand": {
    color:'red',
    [theme.breakpoints.down('sm')]: {
      color: 'blue' 
    }
  },
  "& .language": {}
}))

const Navbar = () => {

  return (
    <NavbarBox>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
        <Box 
          sx={{
            display: 'block'
          }}
        >
          <Typography className='brand' variant='h4' >
            Merlo
          </Typography>
           {/* language selector */}
          <Typography 
            className='language'
            sx={{textAlign: 'end'}}
          >
            langue
          </Typography>
        </Box>
      </Box>
    </NavbarBox>
  )
}

export default Navbar

