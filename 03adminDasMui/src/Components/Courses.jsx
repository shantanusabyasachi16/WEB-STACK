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
console.log(data);
   })
     },[])
  return (
   <></>
  )
}

export default Courses;