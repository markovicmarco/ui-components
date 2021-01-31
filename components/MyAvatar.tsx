import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar:{
      position: 'absolute',
      left: '10px',
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


export default function MyAvatar() {
    const classes = useStyles();
  
    return (
    <Avatar className={classes.avatar} />    

      );
    }        