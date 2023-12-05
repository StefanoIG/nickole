import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Principal from "./components/pages/Principal"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import Seguimiento from './components/pages/Seguimiento'
import TutoriasRegistradas from './components/pages/TutoriasRegistradas'
import RegistrarTutos from './components/pages/RegistrarTutos'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Principal />}/>
          <Route path={"/login"} element={<Login />}/>
          <Route path={"/register"} element={<Register />}/>
          <Route path={"/seguimiento"} element={<Seguimiento />}/>
          <Route path={"/registrartutos"} element={<RegistrarTutos />}/>
          <Route path={"/savedtutos"} element={<TutoriasRegistradas />}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
