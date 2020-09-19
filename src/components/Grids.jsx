import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./Grids.css";
import ButtonCustom from './Button';
import PersonIcon from '@material-ui/icons/Person';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "5.5%",
    marginLeft:"2%",
    position: "absolute",
    zIndex:-1,
    width:"97vw",
    paddingTop: "80px",
    paddingLeft:"14.5px"
  },
  paper: {
    textAlign: 'center',
    padding:0,
    margin:0
  },
  gridItem: {
      margin:0,
      padding:0
  }
}));

export default function Grids() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm = {12} md={6} className = {classes.gridItem}>
          <Paper className={classes.paper}>
          <div className="container">
           <div className="content">
           <div className="content-overlay"></div>
             <img alt = "preschool dinner"className="content-image" src="https://www.laparent.com/wp-content/uploads/2018/09/Children-sitting-on-floor-and-reading-tale-book-in-preschool-libraryKindergarten-school-education-concept.-859996890_3869x2580-copy.jpeg" />
              <div className="content-details fadeIn-bottom">
                    <ButtonCustom>Book Now</ButtonCustom>
                    <ButtonCustom transparent>Learn More</ButtonCustom>
       </div>
     </div>
   </div>
    <div className = "details">
        <div className = "date">
        <h1>31</h1>
        <p>September</p>
        <p>5:00pm</p>
        </div>
        <div className = "venue">
        <h1>Preschool Dinner</h1>
        <span className= "Personicon"><PersonIcon fontSize = "default"/></span> <span className = "Personname">Walter Stanley</span>
        </div>
    </div>
      </Paper>
        </Grid>
        <Grid item sm = {12} md={6}>
          <Paper className={classes.paper}>
          <div className="container">
           <div className="content">
           <div className="content-overlay"></div>
             <img alt = "grandparents day"className="content-image" src="https://lh3.googleusercontent.com/proxy/91dZQzbGUxr88ZT7ZCVDjPatFwNr538crJ06mMgthnxLVgpDAYYP31Ske6uoU_-7L5aPCYnQoSYDbNBpbDOEICqdAKZ-2uOV45QsxtCL-gct266UexNPHgu5CitOW7hAuTk" />
              <div className="content-details fadeIn-bottom">
                    <ButtonCustom>Book Now</ButtonCustom>
                    <ButtonCustom transparent>Learn More</ButtonCustom>
       </div>
     </div>
   </div>
    <div className = "details">
        <div className = "date">
        <h1>5</h1>
        <p>July</p>
        <p>5:00pm</p>
        </div>
        <div className = "venue">
        <h1>Grandparents Day</h1>
        <span className= "Personicon"><PersonIcon fontSize = "default"/></span> <span className = "Personname">Raymond Salazar</span>
        </div>
    </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
