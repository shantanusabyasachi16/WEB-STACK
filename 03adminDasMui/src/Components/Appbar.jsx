import React from 'react'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

function Appbar() {
  const navigate=useNavigate()

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
             navigate("/signup")
         }} 
         >Sign Up</Button>
     </div>

   <div>
         <Button variant="contained" 
          onClick={()=>{
           navigate("/signin")
        }}
         >Sign In</Button>
    </div>
       </div>

    </div>
  )
}

export default Appbar 