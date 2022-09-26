import React, { Component, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)



export default function DashboardGraph() {
    const data = {
        labels: ["May", "June", "July", "August"],
        datasets: [
            {
                data: [1, 2, 3, 4, 5, 6, 7],
                backgroundColor: [
                    "#f38b4a"
                ],
                borderColor: '#B582F4',
                pointBorderColor: '#2ABDF3',
                pointBorderWidth: 4,
                hoverBorderColor : "#000",
                tension: 0.4
            }
        ]
    }

    const options = {
        plugin: {
            legend: false,
            autocolors: false,
        },
        scales: {
            x: {
                display: false
            },
            y: {
                ticks: {
                    // stepSize: 2,
                    callback: (value) => value
                },
                grid: {
                    borderDash: [10]
                }
            }
        }
    };
    return (
    <div>
        <Line data={data} options={options}></Line>
    </div>
    )
}

