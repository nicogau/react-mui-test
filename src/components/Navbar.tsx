import {Box, styled, Typography} from '@mui/material'
import {palette} from '@mui/system'
import React from 'react'


interface NavbarProps {
  brand: string

}

const Navbar = ({brand}: NavbarProps) => {

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
            {brand}
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

/* style of the Navbar 
 *  theme : inherited from  default material-ui theme or customized one
*/
const NavbarBox = styled(Box)(({theme}) => ({
  background: theme.navbar.background,
  // background: theme.palette.background.default,
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

export default Navbar

