import React, { createContext, useState, useEffect } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Appointment from './Pages/Appointment';
// import Home from './Pages/Home';
// import NotFound from './Pages/NotFound';
// import Login from './Pages/Login';
// import Register from './Pages/Register';
import './App.css';
import router from './Router/index';

// import Dashboard from './Pages/Dashboard/Dashboard';
// import Patients from './Pages/Dashboard/Patients';
// import DashBoardAppointments from './Pages/Dashboard/Appointments';
// import Prescriptions from './Pages/Dashboard/Prescriptions';
export const DataContext = createContext();
export const CalenderContext = createContext()

function App() {

  const [allAppointments, setAllAppointments] = useState([]);
  const [allBookedAppointments, setAllBookedAppointments] = useState([]);
  const [allPatients, setAllPatients] = useState([]);
  const [date, setDate] = useState(new Date());
  const [preLoaderVisibility, setPreLoaderVisibility] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:3200/appointments")
  //     .then(res => res.json())
  //     .then(data => {
  //       setAllAppointments(data);
  //       setPreLoaderVisibility(false);
  //     })
  // }, [allAppointments.length])

  // useEffect(() => {
  //   fetch("http://localhost:3200/bookedAppointments")
  //     .then(res => res.json())
  //     .then(data => setAllBookedAppointments(data));

  //   const uniquePatients = [];
  //   const map = new Map();
  //   if (allBookedAppointments.length) {
  //     for (const ap of allBookedAppointments) {
  //       if (!map.has(ap.patientInfo.phone)) {
  //         map.set(ap.patientInfo.phone, true);    // set any value to Map
  //         uniquePatients.push({
  //           name: ap.patientInfo.name,
  //           phone: ap.patientInfo.phone,
  //           email: ap.patientInfo.email,
  //           gender: ap.patientInfo.gender,
  //           age: ap.patientInfo.age,
  //           weight: ap.patientInfo.weight
  //         });
  //       }
  //     }
  //   }

  //   setAllPatients(uniquePatients);

  // }, [allBookedAppointments.length])

  const contextData = { allAppointments, setAllAppointments, allBookedAppointments, setAllBookedAppointments, allPatients, preLoaderVisibility }
  const calenderContextValue = { date, setDate };

  return (
    <DataContext.Provider value={contextData}>
      <CalenderContext.Provider value={calenderContextValue}>
        <div className="App" >
          <BrowserRouter>
            <Switch>
              <Route path="/" component={router} />
            </Switch>
          </BrowserRouter>
        </div>
       
      </CalenderContext.Provider>
    </DataContext.Provider>
  );
}

export default App;