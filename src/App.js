import './App.css';
import Home from "./pages/main/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Appbar from "./shared/nav/Appbar";
import Footer from "./shared/footer/bottom";
import Box from '@mui/material/Box';
import Link from "react";

import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme  } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const theme = createTheme ({
  typography: {
    fontFamily: [
      'Lato',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#9F88B1',
      dark: '#36096B',
    },
    secondary: {
      main: '#FDF7FF',
    },
    iconColor: {
      main: '#36096B',
    },
    textHeaderColor: {
      main: '#36096B',
    },
  },
});

theme.typography.h2 = {
  fontSize: '1.2rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.7rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3rem',
  },
};

theme.typography.h5 = {
  fontSize: '1.2rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.3rem',
  },
};

theme.typography.h6 = {
  fontSize: '1.2rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1rem',
  },
};

theme.typography.h3 = {
  fontSize: '1.2rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.3rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.5rem',
  },
};
const App = () => {
  //const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box>
          <Appbar/>
          <Routes>
            <Route path="/" element={<Home/>}  />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          <Footer/>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
