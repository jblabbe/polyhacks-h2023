import { Header, Div } from '../Layout'
import Slider from '@mui/material/Slider'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useState } from 'react'


export function Login(props) {
  
  const existingUsers = ["JB", "Ben", "Hug", "Jac", "John"];
  const [showError, setShowError] = useState(false);
  let userName = "";
  return (
    <>
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "1em", padding: "0.5em"}}>
      <label>Enter your name:</label>
      <input type="text" onChange={(e) => userName = e.target.value}></input>
      { showError ? <p sx= {{margin:"0"}}>User not found. Please sign up before logging in.</p> : null }
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1em", padding: "0.5em"}}>
        <button onClick={() => { 
            if(existingUsers.includes(userName)) {
              props.userNameChanger(userName);
              props.stateChanger("moodSmiley"); 
            }
            else {
              setShowError(true);
            }
        }}>Login</button>
        <button onClick={() => props.stateChanger("createForm")}>Sign up</button>
      </Box>
    </Box>
    </>
  )
}

export default Login;