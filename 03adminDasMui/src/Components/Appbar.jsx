import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function Appbar() {
  const navigate=useNavigate()
  const[email,setemail] = useState(null);

  useEffect(()=>{
fetch("http://localhost:3000/admin/me",{
  method:"GET",
  headers: {
    
    "Authorization" :"Bearer " + localStorage.getItem ("token")

  }
}).then((res)=>{
 return res.json()
}).then((data)=>{
  if(data.username){
    setemail(data.username)

  }

})
  },[])
  if (email){
    return(
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
    <div>{email}</div>

      <div style={{marginRight:15}}>
         <Button variant="contained"
         onClick={()=>{
          localStorage.setItem("token",null);
         }} 
         >logout</Button>
     </div>

       </div>

    </div>
 )}

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