import Button from '@mui/material/Button'
import { Container } from 'react-bootstrap';
import { Div, MoodButton, Header } from '../Layout'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

export function MoodSmiley(props) {

    function redirectToForm() {
        window.location.replace(".")
    }

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-around", height: "100%", gap: "1em", padding: "0.5em" }}>
                <Box className="bg-primary" sx={{flexGrow: "1", cursor: "pointer"}} onClick={() => props.stateChanger("moodForm")}>
                A
                </Box>
                <Box className="bg-primary" sx={{flexGrow: "1", cursor: "pointer"}} onClick={() => props.stateChanger("moodForm")}>
                B
                </Box>
                <Box className="bg-primary" sx={{flexGrow: "1", cursor: "pointer"}} onClick={() => props.stateChanger("moodForm")}>
                C
                </Box>
            </Box>
        </>
    )
}

export default MoodSmiley;