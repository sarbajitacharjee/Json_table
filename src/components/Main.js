import React, { useState, useEffect } from 'react';
import './Main.css';

const Main = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setData(data.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="main-container">
            <h1>Employee Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Start Date</th>
                        <th>Office</th>
                        <th>Extension</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(employee => (
                        <tr key={employee.id}>
                            <td data-label="ID">{employee.id}</td>
                            <td data-label="Name">{employee.name}</td>
                            <td data-label="Position">{employee.position}</td>
                            <td data-label="Salary">{employee.salary}</td>
                            <td data-label="Start Date">{employee.start_date}</td>
                            <td data-label="Office">{employee.office}</td>
                            <td data-label="Extension">{employee.extn}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Main;
