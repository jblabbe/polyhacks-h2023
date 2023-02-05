import { Avatar } from "@mui/material";
import { Div } from '../Layout'
import Box from '@mui/material/Grid';

export function Header(props) {

    return (
        <Box className="header-sx" sx={{height: "10%", display: "flex", alignItems: "center", justifyContent: "end"}}>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", padding: "1em", color: "#ffffff"}}>
                <Avatar className="avatar" onClick={() => props.stateChanger("dashboard")} style={{ cursor: "pointer", marginRight: "0.5em" }}></Avatar>
                {props.userName}
            </Box>
        </Box >
    )
}

export default Header