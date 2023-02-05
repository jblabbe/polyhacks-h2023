import Button from '@mui/material/Button'
import { Container } from 'react-bootstrap';
import { Div, MoodButton, Header } from '../Layout'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

export function MoodSmiley(props) {

    function redirectToForm() {
        window.location.replace(".")
    }

    function selectMood(moodDiv) {
        props.moodStateChanger(moodDiv.target.id);
        props.stateChanger("moodForm")
    }

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-around", height: "100%", gap: "1em", padding: "0.5em" }}>
                <Box id="good" className="bg-primary" sx={{flexGrow: "1", cursor: "pointer"}} onClick={(div) => selectMood(div)}>
                A
                </Box>
                <Box id="neutral" className="bg-primary" sx={{flexGrow: "1", cursor: "pointer"}} onClick={(div) => selectMood(div)}>
                B
                </Box>
                <Box id="bad" className="bg-primary" sx={{flexGrow: "1", cursor: "pointer"}} onClick={(div) => selectMood(div)}>
                C
                </Box>
            </Box>
        </>
    )
}

export default MoodSmiley;