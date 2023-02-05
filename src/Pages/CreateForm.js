import { Header, Div } from '../Layout'
import Slider from '@mui/material/Slider'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

export function CreateForm(props) {

  const gap = "3em";
  const sliderWidth = "50%";
  let tempName = "";
  let baselineSleep = "";
  let baselineExercise = "";
  let baselineScreentime = "";
  
  return (
    <>
    <form onSubmit={() => { 
      props.stateChanger("moodSmiley");
      props.userNameChanger(tempName); 
      props.baselineChanger([baselineSleep, baselineExercise, baselineScreentime])
    }}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "1em", padding: "0.5em"}}>
        <label>Enter your name:</label>
        <Box>
          <input type="text" onChange={(e) => tempName = e.target.value}></input>
        </Box>
        <label>Enter your average sleep time in a day (Hours):</label>
        <Box>
          <input type="text" onChange={(e) => baselineSleep = convertToMinutes(e.target.value)}></input><br></br>
        </Box>
        <label>Enter your average exercise time in a day (Hours):</label>
        <Box>
          <input type="text" onChange={(e) => baselineExercise = convertToMinutes(e.target.value)}></input><br></br>
        </Box>
        <label>Enter your average screen time in a day (Hours):</label>
        <Box>
          <input type="text" onChange={(e) => baselineScreentime = convertToMinutes(e.target.value)}></input><br></br>
        </Box>
        <input type="submit" value="Create"></input>
      </Box>
    </form>
    </>
  )
}

function convertToMinutes(hoursText) {
  const hoursInt = parseInt(hoursText);
  return hoursInt * 60;
}

export default CreateForm;