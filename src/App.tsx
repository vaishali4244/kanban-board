import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login.tsx";
import Screen from "./screens/index.tsx";
import './App.css';

type Tstate = {
  state: unknown,
  user: any
}


function App() {
  const { login } = useSelector((state: Tstate) => state.user)

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      {login ?

        <Route path='/screen' element={<Screen />} />
        :
        <Route path='/' element={<Login />} />
      }
    </Routes>
  )
}

export default App;

