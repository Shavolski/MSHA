import React from "react";
import PropTypes from "prop-types";
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  borderImage: {
    borderRadius: '8px',
  },

}));

const YoutubeEmbed = ({ embedId }) => {
const classes = useStyles();
  return (
    <Box sx={{ width: '100%' }}>
      <iframe
        width="100%"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className={classes.borderImage}
      />
    </Box>
)};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
