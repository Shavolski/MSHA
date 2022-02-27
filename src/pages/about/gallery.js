import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import missionImage from "./../../shared/images/mission_MSHA.jpg";
import gallery_1 from "./../../shared/images/gallery_1.jpg";
import gallery_2 from "./../../shared/images/gallery_2.jpg";
import gallery_3 from "./../../shared/images/gallery_3.jpg";
import gallery_4 from "./../../shared/images/gallery_4.jpg";
import gallery_5 from "./../../shared/images/gallery_5.jpg";
import gallery_6 from "./../../shared/images/gallery_6.jpg";
import gallery_7 from "./../../shared/images/gallery_7.jpg";
import gallery_8 from "./../../shared/images/gallery_8.jpg";
import gallery_9 from "./../../shared/images/gallery_9.jpg";
import gallery_10 from "./../../shared/images/gallery_10.jpg";

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  borderImage: {
      borderRadius: '8px',
  },
}));
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Gallery() {
  const classes = useStyles();

  return (
    <ImageList
      sx={{ width: '100%', height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            className={classes.borderImage}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: gallery_8,
    title: 'primary school kiganjo',
    rows: 2,
    cols: 2,
  },
  {
    img: gallery_10,
    title: 'primary school thika',
  },
  {
    img: gallery_1,
    title: 'primary school kiganjo',
  },
  {
    img: gallery_5,
    title: 'primary school kiganjo',
    cols: 2,
  },
  {
    img: gallery_4,
    title: 'primary school thika',
    cols: 2,
  },
  {
    img: gallery_6,
    title: 'primary school kiganjo',
    author: '@mercysafehavenacademy',
    rows: 2,
    cols: 2,
  },
  {
    img: gallery_3,
    title: 'primary school thika',
  },
  {
    img: gallery_2,
    title: 'primary school kiganjo',
  },
  {
    img: gallery_7,
    title: 'primary school thika',
    rows: 2,
    cols: 2,
  },
  {
    img: gallery_9,
    title: 'primary school kiganjo',
    cols: 2,
  },
];
