import { Header, Div } from '../Layout'
import { useState } from 'react'
import Slider from '@mui/material/Slider'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

export function MoodForm(props) {

  const gap = "3em";
  const sliderWidth = "50%";

  const [sleepValue, setSleepValue] = useState(0);
  const [exerciseValue, setExerciseValue] = useState(0);
  const [screenTimeValue, setScreenTimeValue] = useState(0);

  const changeSleepValue = (event, newValue) => { setSleepValue(newValue); };
  const changeExerciseValue = (event, newValue) => { setExerciseValue(newValue); };
  const changeScreenTimeValue = (event, newValue) => { setScreenTimeValue(newValue); };

  function selectSliders() {
    props.sliderChanger([sleepValue, exerciseValue, screenTimeValue]);
    props.stateChanger("dashboard");
}

  return (
    <div height="100%" >
      <Box sx={{display: "flex", flexDirection: "column", padding: "1em", alignItems: "center", justifyContent: "space-between", height: "80%"}}>
        <Box sx={{width: sliderWidth, marginTop: gap}}>
          <Slider value={sleepValue} onChange={changeSleepValue}></Slider>
        </Box>
        <Box sx={{width: sliderWidth, marginTop: gap}}>
          <Slider value={exerciseValue} onChange={changeExerciseValue}></Slider>
        </Box>
        <Box sx={{width: sliderWidth, marginTop: gap}}>
          <Slider value={screenTimeValue} onChange={changeScreenTimeValue}></Slider>
        </Box>
      </Box>

      <Div className="d-flex justify-content-between p-2">
        <Button variant="contained" color="success" onClick={() => props.stateChanger("moodSmiley")}>Back</Button>
        <Button variant="contained" color="success" onClick={() => { selectSliders(); }}>Next</Button>
      </Div>
    </div>
  )
}

export default MoodForm;