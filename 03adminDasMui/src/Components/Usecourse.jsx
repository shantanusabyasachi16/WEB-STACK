import { Card ,Typography, TextField, Button} from '@mui/material';
import  { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';

function Usecourse() { 
 
  let { courseId } = useParams();

    const[courses,setcourses]= useState([]);
     useEffect(()=>{
   fetch("http://localhost:3000/admin/courses",{
    method:"GET",
    headers: {
      
      "Authorization" :"Bearer " + localStorage.getItem("token")
  
    }
   }).then((res)=>{
return res.json()
   }).then((data)=>{
  setcourses(data.courses)
   })
     },[])

let course;
for (let i = 0; i < courses.length; i++) {
  if(courses[i].id==courseId)[
    course=courses[i] 
  ]
  
}
  
if(!course){
  return<div>loading....</div>
}    
 
 return(
  <Coursecard course={course}/>,
  <Updatecard course={course}/>
 ) 

  function Updatecard(props){

    const [Title,setTitle] = useState("");
    const [Description,setDescription] = useState("");
    const [Image,setImage] = useState("");

const course =props.course;

    <div style={{display:"flex",justifyContent:"center"}}>
      
  <Card variant="outlined" style={{width: 400 , padding:20}}>
    <Typography>Upadate course details</Typography>
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

      <TextField  fullWidth
     onChange={(e)=>{
   setImage(e.target.value)
    }}
        label="Imagelink" variant="outlined" />


     <br /><br/>


       <Button variant="contained"
       onClick={()=>{
    
     fetch("http://localhost:3000/admin/courses/"+course.id,{
      method:"PUT",
      body: JSON.stringify({
       title:Title,
       description:Description,
       imageLink:Image,
       published:true
      }),
      headers: {
        "content-type" : "application/json",
        "Authorization" :"Bearer " + localStorage.getItem ("token")

      }
     }).then((res)=>{
      return res.json() 

     }).then((data)=>{
    alert("added courses");
     })

       }}
       
       >Updatecousrse</Button>
     
       </Card>
       
 </div>
  }



    function Coursecard(props) {
      const course= props.course;
 return(
  <div>
  <Card style={{
  margin:10,
  width:300,
  minHeight:200
}}>
    <Typography textAlign={"center"} variant='h6'> {course.title}</Typography>
    <Typography textAlign={"center"} variant='h6'>{course.description}</Typography>
    <img src={course.imageLink} style={{width:300}}></img>
    
    </Card>
    </div>
      )
    }
  
   
 } 
export default Usecourse






