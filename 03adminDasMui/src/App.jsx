import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Appbar from './Components/Appbar'
import Signup from './Components/Signup'
import Signin from './Components/Signin'




function App() {
 

  return (
  <>
  {/*<Appbar/> */}
     <Appbar></Appbar>
  <Router>
            <Routes>
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                
            </Routes>
        </Router>
  

  </>
  )
}


export default App






