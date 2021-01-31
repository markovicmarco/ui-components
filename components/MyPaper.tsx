import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper:{
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


export default function MyPaper() {
    const classes = useStyles();
  
    return (
    <Paper className={classes.paper} ></Paper>    

      );
    }        