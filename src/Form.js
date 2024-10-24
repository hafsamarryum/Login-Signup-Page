// import React from 'react'
import React, { useState } from 'react'
function Form()
{ 
    const [action,setaction] =useState("Sign Up");
return(
    <form className='container'>
        <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
        </div>
         <div className='inputs'>
            {action==="Login"?<div></div>:<div className='input'>
                 <img src='./images/person.png' alt=''/>
                 <input type='text'  placeholder='Name' name='name'/>
            </div>}
            
            <div className='input'>
                 <img src='./images/email.png' alt=''/>
                 <input type='email'  placeholder='Email id' name='email'/>

            </div>
            <div className='input'>
                 <img src='./images/password.png' alt=''/>
                 <input type='password'  placeholder='Password' name='password' />
            </div>
            </div>
            {action ==="Sign Up"?<div></div>:<div className='forget-password'>Lost Password? <span>Click Here!</span></div>}
            
            <div className='submit-container'>
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setaction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setaction("Login")}}>Login </div>
             </div>
     
    </form>
);
}
export default Form