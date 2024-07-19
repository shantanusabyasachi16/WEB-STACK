import { Button } from "antd"
import Count from "./components/Count"
import {useDispatch} from"react-redux"
 

function App() {
const dispatch =useDispatch()

  return (
  <div className="App">
  
  <Button onClick={e => dispatch({type:'INCREMENT'})}>Increment</Button>
  <Count/>
  <Button onClick={e => dispatch({type:'DECREMENT'})}>Decrement</Button>
  
 </div>
  )
}

export default App
