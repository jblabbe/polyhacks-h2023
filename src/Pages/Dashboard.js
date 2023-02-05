import { Div, Header } from '../Layout'
import Box from '@mui/material/Box'
import React from 'react';
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
            display: true,
            text: 'Chart.js Line Chart',
        },
    }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => 1),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => 1),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export function Dashboard(props) {


    function getUserData() {
        fetch("http://localhost:5000/user/61a28182-a514-11ed-9576-ee2e98f108a9")
            .then((response) => console.log(response));
    }

    return (
        <>
            <button onClick={() => getUserData()}>fetch!</button>
            <Box sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box>
                        <Line options={options} data={data} />
                    </Box>
                    <Box>
                        <Line options={options} data={data} />
                    </Box>
                    <Box>
                        <Line options={options} data={data} />
                    </Box>
                </Box>
                <Box>

                </Box>
            </Box>
        </>

    )
}

export default Dashboard;