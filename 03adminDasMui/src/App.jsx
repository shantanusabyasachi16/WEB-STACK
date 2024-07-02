import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Appbar from './Components/Appbar'
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import Addcourse from './Components/Addcourse';
import Courses from './Components/Courses';





function App() {
 

  return (
  <>
  {/*<Appbar/> */}
     
  <Router>
    <Appbar></Appbar>
            <Routes>
                <Route path="/course" element={<Addcourse />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                
            </Routes>
        </Router>
  

  </>
  )
}


export default App






