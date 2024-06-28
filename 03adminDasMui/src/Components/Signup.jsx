import React from 'react'  
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material'; 


function Signup() {
  return (     
  <>
  
  <div style={{
    marginTop:150,
    marginBottom:10,
    display:"flex",
    justifyContent:"center "
    
    }}>
 <Typography variant={"h6"}>
    Welcome to Coursesera . Sign up below
  
    </Typography>
  </div>
 

<div  style={{display:"flex",
  justifyContent:"center"
}}>
    <Card variant="outlined" style={{width: 400 , padding:20}}>
      <TextField 
      fullWidth
      id ="username" label="E-mail" variant="outlined" />
        <br/><br/>
      <TextField
     fullWidth
       id="password" label="Password" variant="outlined" />
     <br /><br/>
       <Button variant="contained"
       onClick={()=>{
      let username = document.getElementById('username').value
     let  password = document.getElementById('password').value
     fetch("http://localhost:3000/admin/signup",{
      method:"POST",
      body: JSON.stringify({
        username,
        password
      })
     })

       }}
       
       >Sign up</Button>
     
       </Card>
       </div>
    </>
  )
}

export default Signup;