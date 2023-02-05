import { Header, Div } from '../Layout'
import Slider from '@mui/material/Slider'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

export function MoodForm(props) {

  const gap = "3em";
  const sliderWidth = "50%";

  return (
    <div height="100%" >
      <Box sx={{display: "flex", flexDirection: "column", padding: "1em", alignItems: "center", justifyContent: "space-between", height: "80%"}}>
        <Box sx={{width: sliderWidth, marginTop: gap}}>
          <Slider>

          </Slider>
        </Box>
        <Box sx={{width: sliderWidth, marginTop: gap}}>
          <Slider>

          </Slider>
        </Box>
        <Box sx={{width: sliderWidth, marginTop: gap}}>
          <Slider>

          </Slider>
        </Box>
      </Box>

      <Div className="d-flex justify-content-between p-2">
        <Button variant="contained" color="success" onClick={() => props.stateChanger("moodSmiley")}>Back</Button>
        <Button variant="contained" color="success" onClick={() => props.stateChanger("dashboard")}>Next</Button>
      </Div>
    </div>
  )
}

export default MoodForm;