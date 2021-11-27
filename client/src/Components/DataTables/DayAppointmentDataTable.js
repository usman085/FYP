import React, { useEffect, useState } from "react";

import { getDoctors } from '../../api/api'

const DayAppointmentDataTable = () => {
    
    const [pat, setPat] = useState([]);
    const Doctor = () => {
        
            getDoctors(JSON.parse(localStorage.getItem('auth_user')).user._id).then((res) => {
            setPat(res.data.data)
        })
    };
    useEffect(() => {
        Doctor()

    }, [])
 
    return (
        <div className="bg-white rounded shadow-sm p-3" style={{
            height: "442px",
            overflow: "auto"
        }}>
        <div className="py-3 d-flex align-items-center justify-content-between">
            <h6 className="text-primary"> Appointments </h6>
            <div className="selector">
                {/* {CalenderData.date.getDate()} {CalenderData.date.toLocaleString('default', { month: 'short' }) } , {CalenderData.date.getFullYear()} */}
            </div>
            
        </div>
        {
            <table className="table table-borderless">

                <thead>
                    <tr>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Schedule</th>
                    <th className="text-secondary text-center" scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                            pat.map(ap =>

                            <tr>
                            <td>{ap.patientInfo.name}</td>
                            <td>{ap.date}</td>
                            <td className="text-center">
                                <select
                                // onClick={() => setSelectAppointment(ap)} onChange={e => handleVisitingStatusChange(e.target.value)} 
                                className="btn btn-primary text-capitalize">
                                    <option selected={ap.visitingStatus == "Not Visited"} className="bg-white text-secondary">Not Visited</option>
                                    <option selected={ap.visitingStatus == "Visited"} className="bg-white text-secondary">Visited</option>
                                </select>
                            </td>
                        </tr>
                        )
                    }
                
                </tbody>
            </table>
        }
        </div>
        
        
    );
};

export default DayAppointmentDataTable;