import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

function Course() {
    const [Title,setTitle] = useState("")
    const [Description,setDescription] = useState("")
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      
  <Card variant="outlined" style={{width: 400 , padding:20}}>
      <TextField  fullWidth
      onChange={(e)=>{
        setTitle(e.target.value)
        
      }}

      label="Title" variant="outlined" />
        <br/><br/>


      <TextField  fullWidth
     onChange={(e)=>{
   setDescription(e.target.value)
    }}
        label="Description" variant="outlined" />


     <br /><br/>


       <Button variant="contained"
       onClick={()=>{
    
     fetch("http://localhost:3000/admin/courses",{
      method:"POST",
      body: JSON.stringify({
       title:Title,
       description:Description,
       imageLink:"",
       published:true
      }),
      headers: {
        "content-type" : "application/json",
        "Authorization" :"Bearer " + localStorage.getItem ("token")

      }
     }).then((res)=>{
      return res.json()

     }).then((data)=>{
     localStorage.setItem("token",data.token)
     })

       }}
       
       >Add cousrse</Button>
     
       </Card>
       
 </div>
  )
}

export default Course