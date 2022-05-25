import React from 'react'
import { Routes,Route } from "react-router-dom"
import Home from "./Home"
import LandInPage from "./LandInPage"
import Signup from "./Signup"
import Login from "./Login"
import Jobs from './Jobs'

export const Routing = () => {
  return (
    <>
      <Routes>
         <Route path="/" element={<LandInPage />} isExact="true" />
         <Route path="home" element={<Home />} />
         <Route path="signup" element={<Signup />} />
         <Route path="Login" element={<Login />} />
         <Route path="jobs" element={<Jobs />} />
      </Routes>
    </>
  )
}
