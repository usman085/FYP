import React, { useEffect, useState } from "react";

import { getDoctors } from '../../api/api'

function date(date){
  return  new Date(date).toLocaleString()
}
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
                        <tr className="text-center" >
                    <th className="text-secondary" scope="col">Date</th>
                            <th className="text-secondary" scope="col">Disease</th>
                    <th className="text-secondary text-center" scope="col">Patient Name</th>
                            <th className="text-secondary text-center" scope="col">Status</th>

                    </tr>
                </thead>
                <tbody>
                    {
                            pat.map(ap =>

                                <tr className="text-center" >
                                    <td>{date(ap.createdAt)}</td>
                            <td>{ap.disease}</td>
                            <td>{ap.patient_id.name}</td>

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