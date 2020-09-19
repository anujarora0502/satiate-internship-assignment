import React ,{useState} from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search'

import "./NavBar.css";
import DropDown from "./DropDown";
function NavBar(props){
    
    const [displayDropDown,setDisplayDropDown] = useState(false);

    function dropdownHandler(){
        setDisplayDropDown(prev=>!prev);
    } 

    return (
    <React.Fragment>
    <nav className = "navbar">
     {displayDropDown && <DropDown />}
      <h1 className = "logo">Assignment</h1>
      <ul className = "navlinks">
        <li className = "navlink"><a href = "#home">Home</a></li>
        <li className = "navlink"><a href = "#elements" onClick = {dropdownHandler}>Elements▾</a></li>
        <li className = "navlink"><a href = "#pages"  onClick = {dropdownHandler}>Pages▾</a></li>
        <li className = "navlink"><a href = "#news"  onClick = {dropdownHandler}>News▾</a></li>
        <li className = "navlink"><a href = "#gallery"  onClick = {dropdownHandler}>Gallery▾</a></li>
        <li className = "navlink"><a href = "#shop"  onClick = {dropdownHandler}>Shop▾</a></li>
        <li className = "navlink"><a href = "#donate">Donate</a></li>
        <li className = "navlink"><a href = "#contacts">Contacts</a></li>
        <li className = "navlink"><a href = "#search"><SearchIcon /></a></li>
        <li className = "navlink"><a href = "#cart"><ShoppingCartIcon /></a></li>
      </ul>
    </nav>
    </React.Fragment>
    );
}


export default NavBar;