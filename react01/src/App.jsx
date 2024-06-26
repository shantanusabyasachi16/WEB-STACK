  
import { useState } from 'react'
import './App.css'
 
function App() {
  //state
  const [todo, settodo] = useState({
    Title : "go to gym",
  Descriptions: "go to gym at 7pm",
  id : 1
  })
  
  setInterval(()=>{
settodo({
  Title : "go to gymmm",
  Descriptions: "go to play at 7am",
  id : 2

  })
},2000)
 
 
  return (
    <div>
      {todo.Title}
       <br />
      {todo.Descriptions}
      <br />
      {todo.id}
    <Name firstname={todo.Title}></Name>

    </div>
  )
}  

function Name (props){
  return <div>
    <br />
    {props.firstname}
    <br />
    {props.lastname}
  </div>
}
  
export default App

//we can  change the state from one components to the child components and  the child components can respond to it
 