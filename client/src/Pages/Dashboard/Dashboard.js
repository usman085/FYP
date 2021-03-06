import React from 'react';
import Statistics from '../../Components/Dashboard/Statistics';
import Sidebar from '../../Components/Dashboard/Sidebar';
import DataTable from '../../Components/DataTables/DataTable';
import AppointmentDataTable from '../../Components/DataTables/AppointmentDataTable';

const Dashboard = () => {

    return (
            <div className="container-fluid row " >
                <Sidebar></Sidebar>
                <div className="col-md-10 p-4 pr-5" style={{position:"absolute", right:0,backgroundColor: "#F4FDFB"}}>
                    <h5>Doctor Dashboard</h5>
                    <Statistics/>
                    <DataTable tableName="Recent Appointments">
                        <AppointmentDataTable/>
                    </DataTable>
                </div>
            </div>
    );
};

export default Dashboard;