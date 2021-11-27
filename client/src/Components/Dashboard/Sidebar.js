import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faGripHorizontal,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { useHistory } from "react-router-dom";
const Sidebar = () => {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("auth_user");
    history.push("/login");
  };
  // console.log(JSON.parse(localStorage.getItem('auth_user')).user.role_id.name)
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      {JSON.parse(localStorage.getItem("auth_user")).user.role_id.name ==
      "Doctor" ? (
        <ul className="list-unstyled">
          <li>
            <Link to="/dashboard" className="text-white">
              <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/appointment" className="text-white">
              <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
            </Link>
          </li>
          <li>
            <Link to="/patients" className="text-white">
              <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
            </Link>
          </li>
          <li>
            <Link to="/prescriptions" className="text-white">
              <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="list-unstyled">
          <li>
            <Link to="/patient/dashboard" className="text-white">
              <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/patient/appointment" className="text-white">
              <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
            </Link>
          </li>

          <li>
            <Link to="/prescriptions" className="text-white">
              <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
            </Link>
          </li>
        </ul>
      )}

      <div>
        <Link onClick={logout} className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
