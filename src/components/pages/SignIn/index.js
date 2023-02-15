
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './index.scss';

function Login() {
    let history=useHistory
    const [state,setState]=useState(
        {
        username: '',
        password: '',

    }
)
    const handleChange=(event,id)=>{
        console.log('event:',event.target.value,id);
        setState({
            ...state,
            [id]:event.target.value
        })
    }
    const handleSubmit=()=>{
        const {username,password}=state;
        console.log('username:',username);
        console.log('password',password);

    }
    const{username,password}=state;
    return (
       
       <div className="login-form">
        <div className='login'>
        <center><label><h1>LOGIN</h1></label></center>
            <center><label for =" Username" >Username</label> 
                <input
                type="text"
                value={username}
                onChange={(event)=>handleChange(event,"username")}
                /></center><br></br>
            <center><label for =" Password" >Password</label><input
                type="password"
                value={password}
                onChange={(event)=>handleChange(event,'password')}
                /></center><br></br>
            <center><button type="submit" onClick={ () =>handleSubmit()}>Login</button></center>
            <br></br>
            <center><button>Don't have an account ?....Register here</button></center>
            <p onClick={()=>{history.push("/Signup/Register");
            }}></p>
            </div>  
           


            
        </div>
    )
}

    


export default Login;