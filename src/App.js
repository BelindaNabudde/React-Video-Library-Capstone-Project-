
import React from 'react'
import Signup from "./Signup";
import Login from "./Login"
import {BrowserRouter,Routes,Route} from "react-router-dom";
// import { Route } from '@mui/icons-material';

export default function App(){
    return(    
        <BrowserRouter>
        <div className='App'> 
        <Login/>
        </div>
            <Routes>
            <Route  path='/' element={<Signup/>}/>
            <Route path='/Login' component={<Login/>}/>
            </Routes>   
        </BrowserRouter>
    )
}
