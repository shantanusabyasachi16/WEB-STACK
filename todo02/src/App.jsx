import React from "react";

//in react a function started with capital letter is a component and starting with use is a hook
// custom hook 
function useTodo(){

  const [todos,setTodos]=React.useState([])
    


  React.useEffect(()=>{
     fetch("http://localhost:3002/todos",{
      method:"GET"
     }).then((response)=>(
      response.json().then((data) => {
        console.log(data);
      setTodos(data)}
      )
     )) 

     setInterval(()=>{
      fetch("http://localhost:3002/todos",{
        method:"GET"
       }).then((response)=>(
        response.json().then((data) => {
          console.log(data);
        setTodos(data)}
        )
       )) 
     },1000) 
  },[])

  return todos
}

function App(){
 
   const todos = useTodo()
 
        
  return(
     <div>
      {todos.map((todo) =>{
        return <div>
          {todo.title} 
          {todo.description}
           <button>Delete</button>
        </div>
      })}
     </div>
  )
}


export default App