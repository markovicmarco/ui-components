import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider:{
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


export default function MyDivider() {
    const classes = useStyles();
  
    return (
    <Divider className={classes.divider} />   

      );
    }        