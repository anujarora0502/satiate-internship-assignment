import React from "react";

import "./Form.css";
import {VALIDATOR_REQUIRE,VALIDATOR_EMAIL,VALIDATOR_TEL} from "../util/validators";
import { useForm } from "../components/form-hook";
import Input from "../components/FormElements/Input";




export default function Form(props){

    function SubmitHandler(event){
       event.preventDefault();
    } 


    const [formState,inputHandler] = useForm({
        title:{
            value: "",
            isValid: false
        },
        description:{
            value: "",
            isValid:false
        }
    },true);
    if(formState){
        
    }
    return(
    <div className = "form-container">
         <h1 className = "form-heading">Contact Us</h1>
         <form className = "contact-form" onSubmit = {SubmitHandler}>
       <div className= "form-same-line">
       <Input 
        id="firstName" 
        element = "input" 
        type = "text" 
        label = "First Name"
        validators = {[VALIDATOR_REQUIRE()]}
        errorText = "This field is required"
        onInput = {inputHandler}  
        className = "form-input-same-line" 
        />
        <Input 
        id="lastName" 
        element = "input" 
        type = "text" 
        label = "Last Name"
        validators = {[VALIDATOR_REQUIRE()]}
        errorText = "This field is required"
        onInput = {inputHandler}  
        className = "form-input-same-line" 
        />
       </div>
       <div className= "form-same-line">
       <Input 
        id="email" 
        element = "input" 
        type = "text" 
        label = "Email"
        validators = {[VALIDATOR_EMAIL()]}
        errorText = "This email is not valid"
        onInput = {inputHandler}  
        className = "form-input-same-line" 
        />
        <Input 
        id="firstName" 
        element = "input" 
        type = "text" 
        label = "Phone"
        validators = {[VALIDATOR_TEL()]}
        errorText = "Enter a valid Phone Number(without area code)"
        onInput = {inputHandler}  
        className = "form-input-same-line" 
        />
       </div>
      <Input 
        id="message" 
        element = "textarea" 
        label = "Message"
        validators = {[VALIDATOR_REQUIRE()]}
        errorText = "Please enter a valid Message(at least 5 characters)"
        onInput = {inputHandler} 
        className = "form-textarea-same-line"  
        /> 
      <button className = "send-button">Send Message</button>
  </form>
    </div>);
}