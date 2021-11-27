import React, { Suspense } from 'react';
import { Route, Redirect, useRouteMatch } from "react-router-dom";

// const Dashboard = React.lazy(() => import('../Pages/Dashboard/Dashboard'));
import Dashboard from '../Pages/Dashboard/Dashboard'
import DashBoardAppointments from '../Pages/Dashboard/Appointments'
import Patients from '../Pages/Dashboard/Patients'
import Prescriptions from '../Pages/Dashboard/Prescriptions'

import Appointment from '../Pages/Patient/Appointment'
import PatientsDashboard from '../Pages/Patient/Dashboard'
import PatientPrescriptions from '../Pages/Patient/Prescription'



function RestaurantRoutes() {

    let { path, url } = useRouteMatch();

    return (

        <React.Fragment>
            <Suspense fallback="loading">
                <Route path={`${path}dashboard`} component={Dashboard} />
                <Route path={`${path}patients`} component={Patients} />
                <Route path={`${path}appointment`} component={DashBoardAppointments} />
                <Route path={`${path}prescriptions`} component={Prescriptions} />

                <Route path={`${path}patient/appointment`} component={Appointment} />
                <Route path={`${path}patient/dashboard`} component={PatientsDashboard} />
                <Route path={`${path}patient/prescription`} component={PatientPrescriptions} />


                <Route render={() => <Redirect to={`${path}dashboard`} />} />
            </Suspense>
        </React.Fragment>



    );
}


export default RestaurantRoutes;
