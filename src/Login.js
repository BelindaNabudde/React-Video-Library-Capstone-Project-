import React, { useEffect, useState } from 'react'
import { Avatar, Grid, Paper, TextField, Checkbox, FormGroup, FormControlLabel, Button, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'


import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Login() {

  const navigate = useNavigate();

  const paperStyle = { padding: 20, height: '80vh', width: 280, margin: '20px auto' }
  const avatarstyle = { backgroundColor: ' #4e876f' }
  const btnStyle = { backgroundColor: ' #4e876f', margin: '8px 0' }
  const typoStyle = { margin: '0 0 10px 0' }

  const errorColor = { color: '#FF0000' }

  const [storedUsers, setStoredUsers] = useState([])


  const [loggedInName, setLoggedNAme] = useState('')

  const [loggedInPsswd, setLoggedInPsswd] = useState('')

  const [errorMessage, setErrorMessage] = useState('');


  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(('data')))


    setStoredUsers(storedData)


  }, [])
  console.log(storedUsers)


  // storedUsers.map((user)=>{
  //     return(
  //       console.log(user.name)
  //     )
  //   })




  const handleSubmit = (e) => {
    e.preventDefault();


    for (let i = 0; i < storedUsers.length; i++) {
      if ((storedUsers[i].name === loggedInName) && (storedUsers[i].password === loggedInPsswd)) {

        let loggedData = [
          {
            name: loggedInName,
            psswd: loggedInPsswd
          }
        ]

        let loggedInUsers = JSON.parse(localStorage.getItem('loggedData'));

        if (loggedInUsers) {

          localStorage.setItem('loggedData', JSON.stringify([...loggedData, ...loggedInUsers]))
        } else {

          localStorage.setItem('loggedData', JSON.stringify(loggedData));
        }


        console.log(loggedInName)
        console.log(loggedInPsswd)

        navigate('/popular');

      } else {
        setErrorMessage('Invalid credentials!')
      }
    }

  }

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarstyle}><LockOutlinedIcon /></Avatar>
          <h2>Sign In</h2>
        </Grid>

        <form onSubmit={handleSubmit}>

          <TextField value={loggedInName} onChange={e => setLoggedNAme(e.target.value)} name='username' label='Username' placeholder='Enter User name' fullWidth required /> <br /> 
          {errorMessage && <div style={errorColor} className="error"> {errorMessage} </div>} <br />
          

          <TextField value={loggedInPsswd} onChange={e => setLoggedInPsswd(e.target.value)} name='password' label='Password' type='password' placeholder='Enter User password' fullWidth required />
          {errorMessage && <div style={errorColor} className="error"> {errorMessage} </div>}


          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Remember Me" />

          </FormGroup>

          <Button type='submit' color='primary' style={btnStyle} fullWidth variant="contained">Sign In</Button>


          <Typography style={typoStyle}>
            <Link to='#'>Forgot Password?</Link>
          </Typography>


          <Typography style={typoStyle}> Do you have an account?
            <Link to='/signup'>Sign up</Link>
          </Typography>

        </form>

      </Paper>



    </Grid>
  )
}

export default Login