import React from 'react'
import "../styles/Signup.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const [user,setUser] = useState({email:"",password:""})
  let name,value
  const onInputChange = event => {
       name = event.target.name
       value = event.target.value
      setUser({...user,[name]:value})
  }

  const submitDetails = async(event) => {
      event.preventDefault()
      console.log(user)
      
      const res=await fetch("/login",{
          method:"POST",
          headers:{
              "Content-Type":"application/json",
              "Accept": "application/json"
          },
          body:JSON.stringify(user)
      })

      const data=await res.json();
      console.log(data)
      if(data.message==="User logged successfully"){
          alert(data.message)
          navigate("/Home")
      }
      else{
          alert(data.message)
      }
  }

  return (
    <>
      <form method="POST" id="form">
        <h1>SIGNUP FORM</h1>

        <div className="input-controls">
            <label htmlFor="email">E-MAIL</label>
            <input type="email" name="email" id="email" value={user.email} onChange={onInputChange} required  />
        </div>

        <div className="input-controls">
            <label htmlFor="password">PASSWORD</label>
            <input type="password" name="password" id="password" value={user.password} onChange={onInputChange} required  />
        </div>

        <button type="submit" onClick={submitDetails}>Submit</button>
    </form>
    </>
  )
}

export default Signup