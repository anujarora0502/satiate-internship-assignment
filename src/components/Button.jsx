import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const BootstrapButtonYellow = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      width: "47%",
      fontSize: 24,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#ffcc00',
      borderColor: '#ffcc00',
      borderRadius: "25px",
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: 'white',
        borderColor: 'white',
        boxShadow: 'none',
        color: "#ffcc00"
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#ffcc00',
        borderColor: '#ffcc00',
        color:"white"
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);

  const BootstrapButtonTransparent = withStyles({
    root: {
      boxShadow: 'none',
      width: "51%",
      textTransform: 'none',
      fontSize: 24,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: 'rgb(0,0,0,0)',
      borderColor: 'white',
      borderRadius: "25px",
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: 'white',
        borderColor: 'white',
        boxShadow: 'none',
        color: "gray"
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#ffcc00',
        borderColor: '#ffcc00',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);

  

  export default function ButtonCustom(props) {
    const classes = useStyles();
  
    return ( 
        <React.Fragment>
           {props.transparent && 
         <BootstrapButtonTransparent variant="contained" color="primary" disableRipple className={`classes.margin ${props.className}`}>
            {props.children}
         </BootstrapButtonTransparent>}
         {!props.transparent && <BootstrapButtonYellow variant="contained" color="primary" disableRipple className={classes.margin}>
           {props.children}
         </BootstrapButtonYellow>}
        </React.Fragment>
          
    );
  }