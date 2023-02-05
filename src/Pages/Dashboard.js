import { Div, Header } from '../Layout'
import Box from '@mui/material/Box'
import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
        legend: {
            display: false
        },
    }
};



const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export function Dashboard(props) {

    const [sleepAvg, setSleepAvg] = useState(0);
    const [screenAvg, setScreenAvg] = useState(0);
    const [exerciseAvg, setExerciseAvg] = useState(0);
    const [history, setHistory] = useState([]);
    const [historyData, setHistoryData] = useState({
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => 0),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    })
    const [sleepHistory, setSleepHistory] = useState([]);
    const [exerciseHistory, setExerciseHistory] = useState([]);
    const [screenTimeHistory, setScreenTimeHistory] = useState([]);

    function getUserData() {
        fetch("http://localhost:5000/user/7d61b425-a533-11ed-a068-ee2e98f108a9")
            .then((response) => response.json())
            .then((data) => {
                setSleepAvg(data.baseline.sleep);
                setScreenAvg(data.baseline.screentime);
                setExerciseAvg(data.baseline.exercise);

                let dailys = [];
                data.history.forEach(element => {
                    dailys.push(element.daily);
                });

                let sleepArr = [];
                dailys.forEach(element => {
                    sleepArr.push(element.sleep)
                });
                setSleepHistory({
                    labels,
                    datasets: [
                        {
                            data: sleepArr,
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        }
                    ],
                });

                let exerciseArr = [];
                dailys.forEach(element => {
                    exerciseArr.push(element.exercise)
                })
                setExerciseHistory({
                    labels,
                    datasets: [
                        {
                            data: exerciseArr,
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        }
                    ],
                });

                let screenTimeArr = [];
                dailys.forEach(element => {
                    screenTimeArr.push(element.screentime)
                })
                setScreenTimeHistory({
                    labels,
                    datasets: [
                        {
                            data: screenTimeArr,
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        }
                    ],
                });

            })
    }

    useEffect(() => {
        getUserData();
    })

    return (
        <>
            <p>{sleepAvg}</p>
            <p>{screenAvg}</p>
            <p>{exerciseAvg}</p>
            <Box sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box>
                        {sleepHistory.length !== 0 && <Line options={options} data={sleepHistory} />}
                    </Box>
                    <Box>
                        {exerciseHistory.length !== 0 && <Line options={options} data={exerciseHistory} />}
                    </Box>
                    <Box>
                        {screenTimeHistory.length !== 0 && <Line options={options} data={screenTimeHistory} />}
                    </Box>
                </Box>
                <Box>
                    <Box>
                        Sleep Average
                    </Box>
                    <Box>

                    </Box>
                    <Box>

                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Dashboard;