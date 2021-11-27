import React, { useEffect,useState } from "react";
import AppointmentCard from "./AppointmentCard";

import { DataContext, CalenderContext } from "../../App";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Preloader from "../Preloader/Preloader";
import { faPencilAlt, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import { getDoc, createApp, getAppointment} from '../../api/api'
Modal.setAppElement("#root");
function date(date) {
  return new Date(date).toLocaleString()
}
const AppointmentTable = () => {

  const [selectAppointment, setSelectAppointment] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  
  const [doc, setDoc] = useState([]);
  const [appointment, setAppointment] = useState([]);

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (datas) => {
    datas.patient_id = JSON.parse(localStorage.getItem('auth_user')).user._id
    createApp(datas).then((res)=>{
      setModalIsOpen(false)
      getApp()
    })
    
  }; 
  const Doctor = () => {
    getDoc().then((res) => {
      setDoc(res.data.data)
    })
  };
  const getApp = () => {
    const id = JSON.parse(localStorage.getItem('auth_user')).user._id
    getAppointment(id).then((res) => {
      setAppointment(res.data.data)
    })
  };
  useEffect(()=>{
    Doctor()
    getApp()
  },[])
 
  return (
   
    <div className="offset-2 col-md-10 p-5 pr-5 ">
      <h3 className="text-primary text-center p-12">
      Create Appointment
      </h3>{" "}
      <div className="row">
        <button onClick={() => setModalIsOpen(true)} className="btn btn-primary text-uppercase text-align-right">Book appointment</button>
        <table className="table table-border pt-2">
          <thead>
            <tr className="text-center">
             
              <th className="text-secondary" scope="col">
                {" "}
                Booking Date{" "}
              </th>{" "}
             
              <th className="text-secondary" scope="col">
                {" "}
                Name{" "}
              </th>{" "}
              <th className="text-secondary" scope="col">
                {" "}
                Contact{" "}
              </th>{" "}
              <th className="text-secondary" scope="col">
                {" "}
                Status{" "}
              </th>{" "}
           
            </tr>{" "}
          </thead>{" "}
          <tbody>
            {" "}
            
            {appointment.map(ap => (
              <tr className="text-center">
               
                <td> {date(ap.createdAt)} </td>
                <td> {ap.doctor_id.name} </td>{" "}
                <td> {ap.doctor_id.email} </td>{" "}
                {/* <td className="text-center">
                  <select
                    // onClick={() => setSelectAppointment(ap)}
                    // onChange={e => handleStatusChange(e.target.value)}
                    className={
                      ap.status == "Rejected"
                        ? "btn btn-danger"
                        : ap.status == "Approved"
                          ? "btn btn-success"
                          : "btn btn-info"
                    }
                  >
                    <option
                      selected={ap.status == "Pending"}
                      className="bg-white text-secondary"
                    >
                      {" "}
                      Pending{" "}
                    </option>{" "}
                    <option
                      selected={ap.status == "Approved"}
                      className="bg-white text-secondary"
                    >
                      {" "}
                      Approved{" "}
                    </option>{" "}
                    <option
                      selected={ap.status == "Rejected"}
                      className="bg-white text-secondary"
                    >
                      {" "}
                      Rejected{" "}
                    </option>{" "}
                  </select>

                  <button
                    // onClick={() => openDataEditModal(ap._id)}
                    className="btn ml-1 btn-warning text-white"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faPencilAlt} />{" "}
                  </button>
                </td>{" "} */}
              
              </tr>
            ))}
          </tbody>{" "}
        </table>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(130,125,125,0.75)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            width: "40%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        {" "}
        {isBooked ? (
          <div className="text-center  py-5 my-5">
            <FontAwesomeIcon
              className="text-success"
              style={{ fontSize: "5em" }}
              icon={faCheckCircle}
            >
              {" "}
            </FontAwesomeIcon>{" "}
            <h4 className="mt-5 lead"> Appointment Request Sent! </h4>{" "}
          </div>
        ) : (
       (
            <div className="px-4">
              <h4 className="text-primary text-center">
            
                
              </h4>{" "}
              {/* <p className="text-center text-secondary  small mb-5">
                {" "}
                On{" "}
                {contextData.date.toLocaleString("default", {
                  month: "long",
                })}{" "}
                {contextData.date.getDate()},{contextData.date.getFullYear()}{" "}
              </p>{" "} */}
              <form onSubmit={handleSubmit(onSubmit)}>
              
                <div className="form-group">
                  <input
                    type="text"
                    ref={register({ required: true })}
                      name="phone_number"
                    placeholder="Phone Number"
                    className="form-control"
                  />{" "}
                  {errors.phone && (
                    <span className="text-danger">
                      {" "}
                      This field is required{" "}
                    </span>
                  )}{" "}
                </div>{" "}
               
            
                  <div className="form-group">
                    <input
                      type="text"
                      ref={register({ required: true })}
                      name="disease"
                      placeholder="Disease"
                      className="form-control"
                    />{" "}
                    {errors.disease && (
                      <span className="text-danger">
                        {" "}
                        This field is required{" "}
                      </span>
                    )}{" "}
                  </div>{" "}
          
                  <div className="form-group row">
                    <div className="col-12">
                      <select
                        className="form-control"
                        name="doctor_id"
                        ref={register({ required: true })}
                      >
                        <option disabled={true} value="Not set">
                          {" "}
                          Select Doctor{" "}
                        </option>{" "}
                        {
                          doc.map((item)=>{
                            console.log(item,"item")
                            return [
                              <option value={item._id}> {item.name}</option>
                            ]
                          })
                        }
                      
                      
                      </select>{" "}
                      {errors.doctor && (
                        <span className="text-danger">
                          {" "}
                          This field is required{" "}
                        </span>
                      )}
                    </div>{" "}
                   
                  </div>
                <div className="form-group text-right">
                  <button type="submit" className="btn btn-primary">
                    {" "}
                    Send{" "}
                  </button>{" "}
                </div>{" "}
              </form>{" "}
            </div>
          )
        )}{" "}
      </Modal>{" "}
    </div>
  );
};

export default AppointmentTable;
