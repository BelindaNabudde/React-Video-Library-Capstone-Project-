
import React from 'react'
import {useState} from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import validation from "./vali-login-";
import "./styles.css";

export default function Login(){
    const[values, setValues]=useState({
        userName:"",
        password1:"",
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
        name="userName" 
        value={values.userName} 
        onChange={handleChange}/>
        {errors.userName  && <p className="error">{errors.userName}</p>}
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
        name="password1" 
        value={values.password1} 
        onChange={handleChange}/>
        {errors.password1  && <p className="error">{errors.password1}</p>}
        <br/> 
        <br/>
        <Button id="submit"variant="contained" color="primary" onClick={handleFormSubmit}>Submit</Button>
        </div> 
        <br/>
        <h3 className='text-center'>
            <Link href="./App.js" id="link">Don't have an account</Link>
        </h3> 
        </div>
    );
}

