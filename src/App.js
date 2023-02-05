import logo from './logo.svg';
import './App.css';
import { MoodForm, MoodSmiley, Dashboard } from './Pages'
import { Header } from './Layout'
import { useState } from 'react'
import Box from '@mui/material/Box'

export function App() {

  const [status, setStatus] = useState("moodSmiley");
  const [userName, setUserName] = useState("Default User");
  const [mood, setMood] = useState("");

  return (
    <div>
      <Header className="bg-primary" padding="1em" stateChanger={setStatus} userName={userName} />
      <Box sx={{height: "90%"}}>
        {status === "moodSmiley" && <MoodSmiley stateChanger={setStatus} moodStateChanger={setMood}></MoodSmiley>}
        {status === "moodForm" && <MoodForm stateChanger={setStatus} mood={mood}></MoodForm>}
        {status === "dashboard" && <Dashboard stateChanger={setStatus}></Dashboard>}
    </div>
  )
}

export default App;
