import React from 'react'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


function Appbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between"
    }}>
       
  <div>
      <Typography variant={"h6"} >
        Coursesera
       </Typography>
  </div>


   <div style={{display:"flex"}}>

      <div style={{marginRight:15}}>
         <Button variant="contained"
         onClick={()=>{
             window.location ="/signup"
         }} 
         >Sign Up</Button>
     </div>

   <div>
         <Button variant="contained" 
          onClick={()=>{
            window.location ="/signin"
        }}
         >Sign In</Button>
    </div>
       </div>

    </div>
  )
}

export default Appbar 