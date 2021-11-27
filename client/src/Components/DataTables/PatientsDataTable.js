import React, { useEffect, useState } from "react";

import { getPatients } from '../../api/api'
function date(date) {
    return new Date(date).toLocaleString()
}
const PatientsDataTable = () => {
    const [pat, setPat] = useState([]);
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
                  
                    <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    pat.map(patient =>

                        <tr>
                            <td>{srNo++}</td>
                            <td>{date(patient.createdAt)}</td>
                            <td>{patient.name}</td>
                   
                            <td>{patient.email}</td>
                        </tr>
                    )
                }


            </tbody>
        </table>

    );
};

export default PatientsDataTable;