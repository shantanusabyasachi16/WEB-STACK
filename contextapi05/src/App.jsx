import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cardpropdrilling from './Cardpropdrilling'
import Contextapi from './Contextapi'

function App() {
  const [count, setCount] = useState(0)

  return (
   // <Cardpropdrilling/>
    <Contextapi/>
  ) 
}

export default App
