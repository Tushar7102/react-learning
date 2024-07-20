import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Authcontext } from '../Context/Authcontext'

function Login() {
    const {login}=useContext(Authcontext)
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const Handlesubmit=(e)=>{
        e.preventDefault()
      let userdata={
        email,password
      }

      axios.post("https://reqres.in/api/login",userdata)
      .then((res)=>
    {
        let tokenfromrequveste=(res.data.token)
        console.log(tokenfromrequveste)
       login(tokenfromrequveste)
    })
      .catch((err)=>console.log(err))
    }
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={(e)=>Handlesubmit(e)}>
        <input onChange={(e)=>setemail(e.target.value)} type='email' placeholder='Enter your email'></input><br/>
        <input onChange={(e)=>setpassword(e.target.value)} type='password' placeholder='Enter your password'></input><br/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
