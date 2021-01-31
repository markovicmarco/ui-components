import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button:{
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


export default function MyButton() {
    const classes = useStyles();
  
    return (
    <Button className={classes.button} ></Button>   

      );
    }        