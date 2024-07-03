import  { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';

function Usecourse() {
 
  let {CourseId} = useParams();

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


  

 return(
  
  {CourseId}
   
 )} 
export default Usecourse