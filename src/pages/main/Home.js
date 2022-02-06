import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LandingPage from "./landingPage/lp";
import Part2 from "./section2/part2";
import Part3 from "./section3/part3";
import Footer from "./footer/bottom";


const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, minHeight:'100vh' }}>
      <LandingPage />
      <Part2 />
      <Part3 />
      <Footer />
    </Box>
  );
}

export default Home;
