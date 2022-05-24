import React from 'react';
import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import validation from "./validation";
import {Link} from "react-router-dom";


export default function Signup(){
    const[values, setValues]=useState({
        userName:"",
        email:"",
        password1:"",
        password2:""
    });
    const [errors,setErrors]=useState({});
   
     
    const handleChange=(e)=>{
        setValues({
            ...values,
            [e.target.name]:e.target.value,
        })
    
    }
    const handleFormSubmit=(e)=>{
        e.preventDefault();    
        setErrors(validation(values));
    };
    return(
        <div className="form">
         <div className='icon'>
            <div className='icon-class'></div>
            <PersonAddIcon fontSize="large"/>
            <div className='text'><h1>Sign Up</h1></div>
        </div>
        <div className='row'>
        <div className='col-one'>
        <TextField id="username" type="text"  variant="outlined" label="User Name"
        name="userName" 
        value={values.userName} 
        onChange={handleChange}/>
        {errors.userName  && <p className="error">{errors.userName}</p>}
        </div>
        <br/>

        <div className='col-two'>
        <TextField  id="email" className='email' type="email"  variant="outlined" label="Email"
        name="email" 
        value={values.email}  
        onChange={handleChange}/>
        {errors.email  && <p className="error">{errors.email}</p>}
        </div>
        <br/> 
        </div>
        <div className='row-one'>
        <TextField id="password1"  type="password"  variant="outlined" label="Password"
        name="password1" 
        value={values.password1} 
        onChange={handleChange}/>
        {errors.password1  && <p className="error">{errors.password1}</p>}
        <br/> 
        <br/>
        <TextField id="password2"  type="password"  variant="outlined" label="Confirm Password"
        name="password2" 
        value={values.password2} 
        onChange={handleChange}/> 
        {errors.password2  && <p className="error">{errors.password2}</p>}
        {/* <FormControlLabel control={<Checkbox defaultChecked />} label="I agree to the Terms and Conditions" /> */}
        <br/>
        <br/>
        <Link to="/Login"id="button-link"><Button variant="contained" color="primary"
         onClick={handleFormSubmit}
         >Create Account</Button></Link>
        </div> 
        <br/>
        <h3 className='text-center'>
        <Link to="/Login" id="login-link">Already have an Account</Link>
        </h3> 
        <br/>
        </div>
    );
}