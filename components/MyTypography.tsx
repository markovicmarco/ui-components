import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography:{
    /* height: { '' },*/
    /* width: { '' },*/
    /* display: { '' },*/
    /* color: { '' },*/
    /* backgroundColor: { '' },*/
    /* margin: { '' },*/
    [theme.breakpoints.down('sm')]: {
    /* height: { '' },*/
    /* width: { '' },*/
    color: '#e91e63',
    },
    [theme.breakpoints.up('md')]: {
    /* height: { '' },*/
    /* width: { '' },*/
    color: '#00838f',
    },
    [theme.breakpoints.up('lg')]: {
    /* height: { '' },*/
    /* width: { '' },*/
    color: '#00b0ff',
    },
    }
}),
); 


export default function MyTypography() {
    const classes = useStyles();
  
    return (
          <Typography className={classes.typography} >BLA</Typography> 

      );
    }