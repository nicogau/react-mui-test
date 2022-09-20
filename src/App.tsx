import React from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {Button, createTheme, CssBaseline, Theme} from '@mui/material'
import {ThemeProvider} from '@emotion/react'

/* adding a property to theme
   https://mui.com/material-ui/customization/theming/
 module augmentation in typescript;
   https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
*/
declare module '@mui/material/styles' {
  interface Theme {
    navbar: {
      background: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    navbar?: {
      background?: string;
    };
  }
}


// here we  customize the default theme where we define a new theme property
const theme = createTheme({
  navbar: {
   background: '#f1f1f1'
  }

})

// create a global light theme  using composition with 'theme'
const themeLight = createTheme(theme,{
  palette: {
    background: {
      default: "#e4f0e2"
    }
  }
});

// create a global dark theme using composition with 'theme'
const themeDark = createTheme(theme,{
  palette: {
    background: {
      default: "#222222"
    }
  }
});




const App = () => {
  // boolean to toggle theme
  const [light, setLight] = React.useState(true);
  return (
      <div>

        <ThemeProvider theme={light ? themeLight : themeDark}>
          <Navbar brand={'Merlo'}/>
          <CssBaseline />
          <Button onClick={() => setLight((prev) => !prev)}>Toggle Theme</Button>
        </ThemeProvider>
      </div>
  );
};

export default App
