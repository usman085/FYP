import React, { useEffect, useState } from "react";

import { useContext } from 'react';
import { DataContext } from '../../App';
import { getPatients } from '../../api/api'
const [pat, setPat] = useState([]);
const PatientsDataTable = () => {
    const Doctor = () => {
        getPatients().then((res) => {
            setPat(res.data.data)
        })
    };
    useEffect(() => {
        Doctor()
     
    }, [])
    let srNo = 1;
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Gender</th>
                    <th className="text-secondary" scope="col">Age</th>
                    <th className="text-secondary" scope="col">Weight</th>
                    <th className="text-secondary" scope="col">Phone</th>
                    <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    pat.map(patient =>

                        <tr>
                            <td>{srNo++}</td>
                            <td>{patient.name}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.age}</td>
                            <td>{patient.weight}KG</td>
                            <td>{patient.phone}</td>
                            <td>{patient.email}</td>
                        </tr>
                    )
                }


            </tbody>
        </table>

    );
};

export default PatientsDataTable;