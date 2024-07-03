import React from 'react'  
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material'; 



function Signin() {
  return ( 
  <>
  
  <div style={{
    marginTop:150,
    marginBottom:10,
    display:"flex",
    justifyContent:"center "
    
    }}>
 <Typography variant={"h6"}>
    Welcome back . Sign In below
  
    </Typography>
  </div>
 

<div  style={{display:"flex",
  justifyContent:"center"
}}>
    <Card variant="outlined" style={{width: 400 , padding:20}}>
      <TextField 
      fullWidth
      id="outlined-basic" label="E-mail" variant="outlined" />
        <br/><br/>
      <TextField
     fullWidth
       id="outlined-basic" label="Password" variant="outlined" />
     <br /><br/>
       <Button variant="contained">Sign In</Button>
     
       </Card>
       </div>
    </>
  )
}

export default Signin;