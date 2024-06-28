import React from 'react'  
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';


function Signup() {
  return ( 
  <>
  <div style={{marginBottom:10}}>
 <Typography variant={"h6"}>
    welcomne to coursecera . plese Signup below
  
    </Typography>
  </div>


    <center>
    <Card variant="outlined" style={{width: 400 , padding:20}}>
      <TextField 
      fullWidth
      id="outlined-basic" label="E-mail" variant="outlined" />
        <br/><br/>
      <TextField
     fullWidth
       id="outlined-basic" label="Password" variant="outlined" />
     <br /><br/>
       <Button variant="contained">Sign up</Button>
     
       </Card>
    </center>
    </>
  )
}

export default Signup;