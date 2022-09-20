import React from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {Button, createTheme, CssBaseline} from '@mui/material'
import {ThemeProvider} from '@emotion/react'

const navbarTheme = createTheme({
  palette: {
   background:{
    default: "#ffffff"

   }
  }
})

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2"
    }
  }
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});




const App = () => {
  const [count, setCount] = useState(0)
  const [light, setLight] = React.useState(true);
  return (
      <div>

        <ThemeProvider theme={light ? themeLight : themeDark}>
          <Navbar/>
          <CssBaseline />
          <Button onClick={() => setLight((prev) => !prev)}>Toggle Theme</Button>
        </ThemeProvider>
      </div>
  );
};

export default App
