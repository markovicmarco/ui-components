import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box:{
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


export default function MyBox() {
    const classes = useStyles();
  
    return (
    <Box className={classes.box} />    

      );
    }        