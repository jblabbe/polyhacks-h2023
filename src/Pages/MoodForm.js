import { Div } from '../Layout'
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
    let id = "11e416b1-a52d-11ed-a0db-ee2e98f108a9";
    let mood = 1;
    if (props.mood === "bad") {
      mood = -1;
    }
    else if (props.mood === "neutral") {
      mood = 0;
    }
    processData(id, mood, sleepValue, exerciseValue, screenTimeValue);
    props.stateChanger("dashboard");
  }

  function processData(id, mood, sleep, exercise, screenTime) {
    const body = JSON.stringify({
      "date": new Date().toLocaleDateString('fr-CA'),
      "mood": mood,
      "daily": {
        "sleep": sleep,
        "exercise": exercise,
        "screentime": screenTime
      }
    });

    fetch(`http://localhost:5000/history/${id}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: body
    })
    .then(response => response.json())
  }

  return (
    <div className='slide-container'>
      <Box className='slide-container' sx={{display: "flex", flexDirection: "column", padding: "1em", alignItems: "center", justifyContent: "space-between", height: "80%"}}>
        <Box sx={{width: sliderWidth}}>
          <p>How much sleep did you get last night ?</p>
          <Slider value={sleepValue} onChange={changeSleepValue} min={0} defaultValue={sleepValue}></Slider>
        </Box>
        <Box sx={{width: sliderWidth, marginTop: gap}}>
          <p>How much did you exercise today ?</p>
          <Slider value={exerciseValue} onChange={changeExerciseValue}></Slider>
        </Box>
        <Box sx={{width: sliderWidth, marginTop: gap}}>
          <p>How much time did you spend looking at a screen today ?</p>
          <Slider value={screenTimeValue} onChange={changeScreenTimeValue} max={20} min={0}></Slider>
        </Box>
      </Box>

      <Div className="d-flex p-2 slider-buttons">
        <Button className='slider-btn' variant="contained" onClick={() => props.stateChanger("moodSmiley")}>Back</Button>
        <Button className='slider-btn' variant="contained" onClick={() => { selectSliders(); }}>Next</Button>
      </Div>
    </div>
  )
}

export default MoodForm;