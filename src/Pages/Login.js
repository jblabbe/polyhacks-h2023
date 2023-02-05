import { Header, Div } from '../Layout'
import Slider from '@mui/material/Slider'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { ClassNames } from '@emotion/react';

export function Login(props) {

  const gap = "3em";
  const sliderWidth = "50%";
  let userName = "";

  return (
    <>
    <Box className="background-gradient" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "1em", padding: "0.5em"}}>
      <label className="name-input-text">Enter your name</label>
      <input className='name-input-login' type="text" onChange={(e) => userName = e.target.value}></input>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1em", padding: "0.5em"}}>
        <button className='login-btn' onClick={() => {props.stateChanger("moodSmiley"); props.userNameChanger(userName);}}>Login</button>
        <button className='login-btn' onClick={() => props.stateChanger("createForm")}>Sign up</button>
      </Box>
    </Box>
    </>
  )
}

export default Login;