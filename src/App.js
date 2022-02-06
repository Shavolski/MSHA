import './App.css';
import Home from "./pages/main/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Appbar from "./shared/nav/Appbar"
import Link from "react";

import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme  } from '@mui/material/styles';

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
const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Appbar/>
          <Routes>
              <Route path="/" element={<Home/>}  />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
