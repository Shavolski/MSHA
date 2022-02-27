import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SchoolIcon from '@mui/icons-material/School';

import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import logo from "./../../shared/images/logo.jpg";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  logoImage: {
      backgroundImage: `url(${logo})`,
      backgroundSize: 'cover'
  },
  modalStyle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#36096B',
    border: '2px solid #36096B',
    boxShadow: 24,
    borderRadius: '8px',
    p: 2,
    [theme.breakpoints.down('md')]: {
      width: '75%',
    },
    [theme.breakpoints.up('md')]: {
      width: '75%',
    },
    [theme.breakpoints.up('lg')]: {
      width: 'auto',
    },
  }
}));

const style = {

};

const Appbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const breakPoint = 1450;

  useEffect(() => {
   const handleWindowResize = () => setWidth(window.innerWidth);
   window.addEventListener("resize", handleWindowResize);
   return () => window.removeEventListener("resize", handleWindowResize);
  },[]);


  const NormalView = () => {
    return (
      <Toolbar>
        <Box sx={{ flexGrow: 1, py:2}} >
          <Grid
            component={Link} to="/"
            sx={{textDecoration:'none'}}
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center">
            <Grid item md={1}>
              <Box className={classes.logoImage} sx={{ width: 80, height: 80, borderRadius: 16, mb:2 }}></Box>
            </Grid>
            <Grid item md={11}>
              <Typography variant="h6" component="div" sx={{ fontWeight: 400 }} color="#000000">
                Mercy Safe Haven Academy
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Button color="inherit" size="small" component={Link} to="/about" sx={{mx:2}}>About us</Button>
        <Button color="inherit" size="small" component={Link} to="/contact" sx={{mx:2}}>Contact us</Button>
        <Button color="inherit" size="small" variant="outlined" startIcon={<SchoolIcon />} sx={{mx:2}} onClick={handleOpen}>Admission</Button>
      </Toolbar>
    );
  }

  const MobileView = () => {
    return (
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<MenuIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center">
            <Grid item md={12}>
              <Box className={classes.logoImage} sx={{ width: 60, height: 60, borderRadius: 16, mb:2 }}></Box>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/">
                <ListItemText primary="Home"/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/about">
                <ListItemText primary="About us"/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/contact">
                <ListItemText primary="Contact Us" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="https://www.youtube.com/channel/UCeiaIR_wGW9FO1IPmENXNwQ" target="_blank">
                <ListItemText primary="YouTube" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <Button color="inherit" size="small" variant="outlined" startIcon={<SchoolIcon />} sx={{mx:2, mt:2}} onClick={handleOpen}>Admission</Button>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    );
  }
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1}} >
      <AppBar position="static" color="transparent" elevation={0}>
        {width > breakPoint
          ? <NormalView/>
          : <MobileView />
        }

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={classes.modalStyle}>
            <CardContent>
              <Typography variant="h5" component="div"  color="primary" sx={{fontWeight: 700, mb: 1.5, mt:2}}>
                Great news! Onboarding is open for the year 2022.
              </Typography>
              <Typography sx={{ mb: 1.5, fontWeight: 400 }} color="secondary" variant="h6">
                Kindly contact and book a day for you to come and visit. We are looking forward to meet you!
              </Typography>
              <List>
                <ListItem sx={{px:0}}>
                  <ListItemIcon>
                    <LocalPhoneIcon color="iconColor" sx={{p:0.5, bgcolor:"#FDF7FF", borderRadius: 2}}/>
                  </ListItemIcon>
                  <ListItemText sx={{color:"#ffffff"}} primary="0742 568 480 / 0745 334 942 / 0792 275 973" />
                </ListItem>
              </List>
            </CardContent>
          </Box>
        </Modal>
      </AppBar>
    </Box>
  );
}

export default Appbar;
