import { Card, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useState } from 'react';

function Courses() {

    const[courses,setcourses]= useState([]);
     useEffect(()=>{
   fetch("http://localhost:3000/admin/courses",{
    method:"GET",
    headers: {
      
      "Authorization" :"Bearer " + localStorage.getItem ("token")
  
    }
   }).then((res)=>{
return res.json()
   }).then((data)=>{
  setcourses(data.courses)
   })
     },[])


return (
  <div style={{display:"flex"}}>

    {courses.map((value) => (
      <Course  course={value} />
    ))}
  </div>
);
}

export function Course(props) {
return (
<Card style={{
  margin:10,
  width:300,
  minHeight:200
}}>
    <Typography textAlign={"center"} variant='h6'> {props.course.title}</Typography>
    <Typography textAlign={"center"} variant='h6'>{props.course.description}</Typography>
    <img src={props.course.imageLink} style={{width:300}}></img>
    
    </Card>
);
}

export default Courses;