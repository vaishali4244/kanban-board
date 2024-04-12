import { useSelector } from "react-redux";
import { Routes, Route} from "react-router-dom";

import './App.css';
import Login from "./components/login";
import Screen from "./screens/index";

function App() {
  const {login}= useSelector(state =>state.user)

  return (
    <Routes> 
       <Route path='/' element={<Login />} />
       {login?
      
      <Route path='/screen' element={<Screen />} />
       :
      <Route path='/' element={<Login />} />
       } 
    </Routes>
  )
}

export default App;

