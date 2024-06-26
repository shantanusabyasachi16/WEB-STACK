import { useState } from 'react'

import './App.css'


function App() {
  const [todos, setTodos] = useState([{
    title: "go to gym",
    Descriptions : "go to gym at 7pm",
  },{
    title: "go to class",
    Descriptions : "go to class at 7pm",
  }
])
 
  return (
<div>
  {todos.map((todo)=>{
   return  < Todo title = {todo.title} descriptions = {todo.Descriptions}></Todo>
  
  })}
</div>
  )
}
  function Todo(props){
  return <div>
    {props.title}
    {props.Descriptions}
  </div>
  }



export default App