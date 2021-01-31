import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card:{
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


export default function MyCard() {
    const classes = useStyles();
  
    return (
    <Card className={classes.card} ></Card>    

      );
    }        