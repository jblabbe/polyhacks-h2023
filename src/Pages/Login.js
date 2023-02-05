import { Header, Div } from '../Layout'
import Slider from '@mui/material/Slider'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

export function Login(props) {

  const gap = "3em";
  const sliderWidth = "50%";
  let userName = "";

  return (
    <>
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "1em", padding: "0.5em"}}>
      <label>Enter your name:</label>
      <input type="text" onChange={(e) => userName = e.target.value}></input>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1em", padding: "0.5em"}}>
        <button onClick={() => {props.stateChanger("moodSmiley"); props.userNameChanger(userName);}}>Login</button>
        <button onClick={() => props.stateChanger("createForm")}>Sign up</button>
      </Box>
    </Box>
    </>
  )
}

export default Login;