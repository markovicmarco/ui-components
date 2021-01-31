import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link:{
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


export default function MyLink() {
    const classes = useStyles();
  
    return (
    <Link className={classes.link} ></Link>    

      );
    }        