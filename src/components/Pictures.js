import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#A7A7A7',
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

 const tileData = [
   {
     img: 'https://images7.alphacoders.com/328/328934.jpg',
     title: 'Image',   
     cols:2,   
   },
   {
    img: 'http://www.kristinbanta.com/wp-content/uploads/2014/12/3.jpg',
    title: 'Image',     
  },
  {
    img: 'https://wallpapercave.com/wp/wp3032206.jpg',
    title: 'Image',    
  },
  {
    img: 'https://30got1mo77p8zm7180t9tf2p-wpengine.netdna-ssl.com/wp-content/uploads/2014/10/Interior-A.jpg',
    title: 'Image',     
    cols:2,  
  },
  {
    img: 'http://www.schickler.be/wp-content/uploads/2017/11/Circus-11.jpg',
    title: 'Image', 
    cols:2,    
  },
  {
    img: 'https://i.pinimg.com/originals/09/3f/e4/093fe4d962bbf9c76e36ac679926eb1c.jpg',
    title: 'Image',     
  },
  {
    img: 'https://www.kristinbanta.com/wp-content/uploads/2015/01/72.jpg',
    title: 'Image',     
  },
  {
    img: 'https://www.abc.net.au/news/image/3755420-3x2-940x627.jpg',
    title: 'Image',
    cols:2,     
  },]


   export default function Pictures() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }