import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rating:{
   /* height: { '' },*/
   /* width: { '' },*/
   /* display: { '' },*/
   /* color: { '' },*/
   /* backgroundColor: { '' },*/
   /* margin: { '' },*/
   [theme.breakpoints.down('sm')]: {
   /* height: { '' },*/
   /* width: { '' },*/
   },
   [theme.breakpoints.up('md')]: {
   /* height: { '' },*/
   /* width: { '' },*/
   },
   [theme.breakpoints.up('lg')]: {
   /* height: { '' },*/
   /* width: { '' },*/
   },
      }
}),
); 


export default function MyRating() {
    const classes = useStyles();
  
    return (
    <Rating className={classes.rating} />    

      );
    }        