import React from 'react';
import './Chart.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {

    const data = [
        {
            name: 'Jan',
            "Active User": 1000,

        },
        {
            name: 'Feb',
            "Active User": 7000,

        },
        {
            name: 'Apr',
            "Active User": 2000,

        },
        {
            name: 'May',
            "Active User": 4896,

        },
        {
            name: 'June',
            "Active User": 3245,

        },
        {
            name: 'July',
            "Active User": 4962,

        },
        {
            name: 'Aug',
            "Active User": 3490,

        },
        {
            name: 'Sep',
            "Active User": 8000,

        },
        {
            name: 'Oct',
            "Active User": 1790,

        },
        {
            name: 'Nov',
            "Active User": 4469,

        },
        {
            name: 'Dec',
            "Active User": 2490,

        },
    ];


    return (
        <div className="chart">
            <h4 className="chartTitle robotoFont">User Analytics</h4>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
                    <Tooltip />
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;