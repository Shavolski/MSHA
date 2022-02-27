import React, { useEffect} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LandingPage from "./landingPage/lp";
import Part2 from "./section2/part2";
import Part3 from "./section3/part3";
import Part3Beta from "./section3/part3Beta";


const Home = () => {
  useEffect(() => {
    document.title = "Mercy Safe Haven Home Page";
  }, [])
  return (
    <Box sx={{ flexGrow: 1, minHeight:'100vh' }}>
      <LandingPage />
      <Part2 />
      <Part3Beta />
    </Box>
  );
}

export default Home;
