import React from "react";

import "./DropDown.css";

export default function DropDown(props){

    return (
      <div className = "dropdown-container">
         <div className = "dropdown-column">
             <h2>Programs</h2>
             <p><a href="/">Academics</a></p>
         </div>
         <div className = "dropdown-column">
             <h2>Pages</h2>
             <p><a href="/">404</a></p>
             <p><a href="/">Terms of Use</a></p>
             <p><a href="/">Maintenance</a></p>
             <p><a href="/">Login/Register</a></p>
             <p><a href="/">Coming Soon</a></p>
             <p><a href="/">Search Results</a></p>
             <p><a href="/">Apply</a></p>
         </div>
         <div className = "dropdown-column">
             <h2>Layouts</h2>
             <p><a href="/">Header Transparent</a></p>
             <p><a href="/">Header Center, Footer Center</a></p>
             <p><a href="/">Header Minimal, Footer Center</a></p>
             <p><a href="/">Header Corporate</a></p>
             <p><a href="/">Header Hamburger Menu</a></p>
             <p><a href="/">Footer Minimal</a></p>
             <p><a href="/">Footer Widget</a></p>
         </div>
         <div className = "dropdown-column">
            <h2>About</h2>
             <p><a href="/">History</a></p>
             <p><a href="/">People</a></p>
             <p><a href="/">Team Member Profile</a></p>
             <h2>Event Calendar</h2>
             <p><a href="/">Calendar</a></p>
             <p><a href="/">Daily Events</a></p>
             <p><a href="/">Event Page</a></p>
         </div>
      </div>
    );

}