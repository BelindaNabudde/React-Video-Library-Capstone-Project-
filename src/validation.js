import React from 'react';

const validation=(values)=>{
    let errors={};
    if(!values.userName){
        errors.userName="User name is required."
    }
        if(!values.email){
            errors.email ="Email is required."
        }else if(!/\S+@\S+\.\S+/.test(values.email)){
            errors.email="Email is invalid."
        }
        if(!values.password1){
            errors.password1="Password is required.";
        } else if(values.password1.length<5){
                errors.password1='Password must be more then five characters'
            }
            if(!values.password2){
                errors.password2="Password is required.";
            } 
            if(values.password2.length<5){
                errors.password2='Password must be more then five characters'
            }
            if(values.password2 !== values.password1){
                errors.password2="Passwords  should be the same"
            }
    
    return errors;
    
    
};

export default validation