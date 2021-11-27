import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Sidebar from '../../Components/Dashboard/Sidebar';
import AppointmentSection from '../../Components/Appointment/AppointmentSection';
import AppointmentTable from '../../Components/Appointment/AppoitmentTable';
import { useEffect } from 'react';


const Appointment = () => {
    
   

    useEffect(() => {window.scrollTo(0,0)}, [])
    return (
        <>
            <Sidebar></Sidebar>
            <AppointmentTable/>
        </>

    );
};

export default Appointment;