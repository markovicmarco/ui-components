import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    badge:{
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


export default function MyBadge() {
    const classes = useStyles();
  
    return (
    <Badge className={classes.badge} />   

      );
    }        