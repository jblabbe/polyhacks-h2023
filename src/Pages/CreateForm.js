import { Header, Div } from '../Layout'
import Slider from '@mui/material/Slider'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { ClassNames } from '@emotion/react';

export function CreateForm(props) {

  const gap = "3em";
  const sliderWidth = "50%";
  let tempName = "";
  let baselineSleep = "";
  let baselineExercise = "";
  let baselineScreentime = "";
  
  function processInput() {
    let form = document.getElementById("user-data");

    let body = JSON.stringify({
      "name": form.name.value,
      "actions": {
        "sleep": 0,
        "exercise": 0,
        "screentime": 0
      },
      "baseline": {
        "sleep": form.sleep.value,
        "exercise": form.exercise.value,
        "screentime": form.screentime.value
      },
      "history": []
    });

    fetch("http://localhost:5000/user", {
      method: "POST",
      mode: "cors",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: body
    })
    .then(response => response.json())
    .then(data => console.log(data));

    props.stateChanger("moodSmiley");
  }

  return (
    <>
      <Box className="background">
        <form id="user-data" onSubmit={() => { 
          props.stateChanger("moodSmiley");
          props.userNameChanger(tempName); 
          props.baselineChanger([baselineSleep, baselineExercise, baselineScreentime])
        }}>
          <Box id="container">
            <Box className="field">
              <label className="label">Enter your name:</label>
              <input id="name" className="input" name="name" type="text" onChange={(e) => tempName = e.target.value}></input>
            </Box>
            <Box className="field">
              <label className="label">Enter your average sleep time in a day (in hours):</label>
              <input id="sleep" className="input" name="sleep" type="text" onChange={(e) => baselineSleep = convertToMinutes(e.target.value)}></input>
            </Box>
            <Box className="field">
              <label className="label">Enter your average exercise time in a day (in hours):</label>
              <input id="exercise" className="input" name="exercise" type="text" onChange={(e) => baselineExercise = convertToMinutes(e.target.value)}></input>
            </Box>
            <Box className="field">
              <label className="label">Enter your average screen time in a day (in hours):</label>
              <input id="screentime" className="input" name="screentime" type="text" onChange={(e) => baselineScreentime = convertToMinutes(e.target.value)}></input>
            </Box>
            <input className="submit-btn" type="submit" value="Create" onClick={() => { processInput(); }}></input>
          </Box>
        </form>
      </Box>
    </>
  )
}

function convertToMinutes(hoursText) {
  const hoursInt = parseInt(hoursText);
  return hoursInt * 60;
}

export default CreateForm;