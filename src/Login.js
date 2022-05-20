
import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import CheckBoxOutlinedBlankIcon from '@material-ui/icons/CheckBoxOutlinedBlank';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import "./styles.css";

export default function Login(){
    return(
        <div className='form'> 
         <div className='icon'>
            <div className='icon-class'></div>
            <PersonAddIcon fontSize="large"/>
            <div className='text'><h1>Log in</h1></div>
        </div>
        <div className='row'>
        <div className='col-one'>
        <TextField id="username"  type="text"  variant="outlined" label="UserName/Email" />
        </div>
        <br/>
        <br/>
        {/* <div className='col-two'>
        <TextField id="email"  type="text"  variant="outlined" label="Email" fullWidth/>
        </div>
        <br/> 
        <br/> */}
        </div>
        <div className='row'>
        <TextField id="password1"  type="text"  variant="outlined" label="Password"/>
        <br/> 
        <br/>
        {/* <TextField id="password2"  type="text"  variant="outlined" label="Confirm Password" fullWidth/> */}
        {/* <FormControlLabel control={<Checkbox defaultChecked />} label="I agree to the Terms and Conditions" /> */}
        <br/>
        <br/>
        <Button id="submit"variant="contained" color="primary">Submit</Button>
        </div> 
        <br/>
        <h3 className='text-center'>
            <Link href="./App.js" id="link">Don't have an account</Link>
        </h3> 
        </div>
    );
}

