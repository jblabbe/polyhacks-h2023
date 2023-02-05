import {Div} from '../Layout'
import Box from '@mui/material/Box'

export function MoodButton(props) {

    const className = props.className + " rounded"

    return(
        <Box className={props.className} onClick={props.onClick} style={{cursor: "pointer", height: "100%"}} >
            {props.children}
        </Box>

    )
}

export default MoodButton;