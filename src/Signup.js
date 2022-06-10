import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from 'react-router-dom'



function Signup() {


    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [pnumber,setPnumber] = useState('')
    const [password,setPassword] = useState('')
    const [comfpsswd,setComfpsswd] = useState('')


    const navigate = useNavigate();

    


    const paperStyle = { padding: '30px 20px', height: '95vh', width: 300, margin: '20px auto' }
    const avatarstyle = { backgroundColor: ' #4e876f' }
    const headerStyle = { margin: 0 }
    const btnStyle = { backgroundColor: ' #4e876f', margin: '8px 0' }
    const textStyle = { margin: '10px 0 10px 0' }



    const handleSubmit = (event) => {
        event.preventDefault();


        let data = [ {
            name:name,
            number: pnumber,
            password:password,
            newPssswd:comfpsswd
        } ]

        
        // localStorage.setItem('data', JSON.stringify({...data}));


        let storedDAta = JSON.parse(localStorage.getItem('data'))

        if(storedDAta){
    
            localStorage.setItem('data',JSON.stringify([ ...data, ...storedDAta]))
        }else{
    
            localStorage.setItem('data',JSON.stringify(data));
        }

      

        navigate('/');

        setName('')
        setEmail('')
        setPnumber('')
        setPassword('')
        setComfpsswd('')
    }

    

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>

                <Grid align='center'>
                    <Avatar style={avatarstyle}><AddCircleOutlineIcon /></Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption'> Please fill in this form to create an account !</Typography>
                </Grid>

                <form onSubmit={handleSubmit}>
                    <TextField required value={name} onChange={((e)=>{setName(e.target.value)})} fullWidth label='Name' placeholder='Enter your name' style={textStyle} />
                    <TextField required value={email}  onChange={((e)=>{setEmail(e.target.value)})} fullWidth label='Email' placeholder='Enter your email' type='email' style={textStyle} />
                    <TextField required value={pnumber} onChange={((e)=>{setPnumber(e.target.value)})}  fullWidth label='Phone Number' placeholder='Enter your phone number' type='number' style={textStyle} />
                    <TextField required value={password} onChange={((e)=>{setPassword(e.target.value)})}  fullWidth label='Password' placeholder='Enter password' type='password' style={textStyle} />
                    <TextField required value={comfpsswd}  onChange={((e)=>{setComfpsswd(e.target.value)})} fullWidth label='Confirm Password' placeholder='Repeat the password' type='password' style={textStyle} />
                    <Button fullWidth style={btnStyle} variant='contained' type='submit'>Sign Up</Button>
                </form>

                <Typography>
                    <Link to='/'>Already have an account?</Link>
                </Typography>

            </Paper>
        </Grid>
    )
}

export default Signup