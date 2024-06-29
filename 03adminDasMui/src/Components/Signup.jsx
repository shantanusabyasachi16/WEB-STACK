import React, { useState } from 'react'  
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material'; 


function Signup() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
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
      <TextField  fullWidth
      onChange={(e)=>{
        setemail(e.target.value)
      }}

      label="E-mail" variant="outlined" />
        <br/><br/>


      <TextField  fullWidth
     onChange={(e)=>{
      setpassword(e.target.value)
    }}
        label="Password" variant="outlined" />


     <br /><br/>


       <Button variant="contained"
       onClick={()=>{
    
     fetch("http://localhost:3000/admin/signup",{
      method:"POST",
      body: JSON.stringify({
        username:email,
        password :password
      }),
      headers: {
        "content-type" : "application/json"
      }
     }).then((res)=>{
      return res.json()

     }).then((data)=>{
     localStorage.setItem("token",data.token)
     })

       }}
       
       >Sign up</Button>
     
       </Card>
       </div>
    </>
  )
}

export default Signup;