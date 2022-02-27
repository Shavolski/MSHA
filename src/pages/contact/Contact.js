import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import mainBGWhite from "./../../shared/images/mainBGWhite.png";
import kidsCake from "./../../shared/images/kidsCake.png";
import { makeStyles } from '@mui/styles';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DraftsIcon from '@mui/icons-material/Drafts';


const useStyles = makeStyles(theme => ({
  picBG: {
      backgroundImage: `url(${mainBGWhite})`,
      backgroundSize: 'cover'
  },
  borderImage: {
    borderRadius: '8px',
  },
}));

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Mercy Safe Haven Contact Page";
  }, []);
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ minHeight:'100vh', p:4}} className={classes.picBG}>
        <Grid item xs={12} md={5}>
          <Box>
            <Typography variant="h2" color="#36096B" sx={{fontWeight: 900, pb:5}}>The journey of a thousand miles begins with a single step...let's get in touch.</Typography>
            <List>
              <ListItem sx={{px:0}}>
                <ListItemIcon>
                  <LocalPhoneIcon color="iconColor" sx={{p:1, bgcolor:"#FDF7FF", borderRadius: 2}}/>
                </ListItemIcon>
                <ListItemText primary="0742 568 480 / 0745 334 942 / 0792 275 973" />
              </ListItem>
              <ListItem sx={{px:0}}>
                <ListItemIcon>
                  <DraftsIcon color="iconColor" sx={{p:1, bgcolor:"#FDF7FF", borderRadius: 2}} />
                </ListItemIcon>
                <ListItemText primary="mercysafehavenacademy@gmail.com" />
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3989.1197321099!2d37.09447380548828!3d-1.0722055238274082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1645994376586!5m2!1sen!2sus"
                width="100%" height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                className={classes.borderImage}
                loading="lazy"></iframe>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
