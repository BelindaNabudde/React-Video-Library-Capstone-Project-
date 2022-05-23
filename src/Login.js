
import React from 'react'
import {useState} from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import validation from "./vali-login-";
import Signup from "./Signup"
import "./styles.css";
import {Link} from "react-router-dom";

export default function Login(){
    const[values, setValues]=useState({
        username:"",
        password:"",
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
    }
    return(
        <div className='form'> 
         <div className='icon'>
            <div className='icon-class'></div>
            <PersonAddIcon fontSize="large"/>
            <div className='text'><h1>Log in</h1></div>
        </div>
        <div className='row'>
        <div className='col-one'>
        <TextField id="username"  type="text"  variant="outlined" label="UserName"
        name="username" 
        value={values.username} 
        onChange={handleChange}/>
        {errors.username  && <p className="error">{errors.username}</p>}
        </div>
        </div>
        <br/>
        <br/>
        {/* <div className='col-two'>
        <TextField id="email"  type="text"  variant="outlined" label="Email" fullWidth/>
        </div>
        <br/> 
        <br/> */}
        
        <div className='row'>
        <TextField id="password1"  type="text"  variant="outlined" label="Password"
        name="password" 
        value={values.password} 
        onChange={handleChange}/>
        {errors.password  && <p className="error">{errors.password}</p>}
        <br/> 
        <br/>
        <Link to="/Signup"><Button id="submit"variant="contained" color="primary" onClick={handleFormSubmit}>  Submit</Button></Link>
        </div> 
        <br/>
        <h3 className='text-center'>
            <Link to="/Signup">Don't have an account</Link>
        </h3> 
        </div>
    );
}

