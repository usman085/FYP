import React, { useContext } from "react";
import AppointmentCard from "./AppointmentCard";
import { useState } from "react";
import { DataContext, CalenderContext } from "../../App";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Preloader from "../Preloader/Preloader";

Modal.setAppElement("#root");

const AppointmentTable = () => {
  const contextData = useContext(CalenderContext);
  const contextData_2 = useContext(DataContext);
  const [selectAppointment, setSelectAppointment] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  console.log(contextData_2.preLoaderVisibility);


 
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    
  };
 
  return (
   
    <div className="offset-2 col-md-10 p-4 pr-5 ">
      <h3 className="text-primary text-center p-12">
      Create Appointment
      </h3>{" "}
      <div className="row">
        <button onClick={() => setModalIsOpen(true)} className="btn btn-primary text-uppercase text-align-right">Book appointment</button>
        <table className="table table-border">
          <thead>
            <tr className="text-center">
              <th className="text-secondary text-left" scope="col">
                {" "}
                Sr No{" "}
              </th>{" "}
              <th className="text-secondary" scope="col">
                {" "}
                Date{" "}
              </th>{" "}
              <th className="text-secondary" scope="col">
                {" "}
                Time{" "}
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
                Prescription{" "}
              </th>{" "}
              <th className="text-secondary" scope="col">
                {" "}
                Action{" "}
              </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            {" "}
            {/* {ContextData.allBookedAppointments.map(ap => (
              <tr>
                <td> {srNo++} </td> <td> {ap.date} </td> <td> {ap.time} </td>{" "}
                <td> {ap.patientInfo.name} </td> <td> {ap.patientInfo.phone} </td>
                <td className="text-center">
                  {" "}
                  {ap.prescription ? (
                    <button
                      onClick={() => openPrescriptionModal(ap._id)}
                      className="btn btn-primary"
                    >
                      {" "}
                      View{" "}
                    </button>
                  ) : (
                    <span>
                      <span> Not Added </span>{" "}
                      <FontAwesomeIcon
                        onClick={() => openPrescriptionModal(ap._id)}
                        className="text-success ml-2"
                        style={{ cursor: "pointer" }}
                        icon={faPlusCircle}
                      />{" "}
                    </span>
                  )}{" "}
                </td>{" "}
                <td className="text-center">
                  <select
                    onClick={() => setSelectAppointment(ap)}
                    onChange={e => handleStatusChange(e.target.value)}
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
                    onClick={() => openDataEditModal(ap._id)}
                    className="btn ml-1 btn-warning text-white"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faPencilAlt} />{" "}
                  </button>
                </td>{" "}
              </tr>
            ))} */}
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
              <p className="text-center text-secondary  small mb-5">
                {" "}
                On{" "}
                {contextData.date.toLocaleString("default", {
                  month: "long",
                })}{" "}
                {contextData.date.getDate()},{contextData.date.getFullYear()}{" "}
              </p>{" "}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <input
                    type="text"
                    ref={register({ required: true })}
                    name="name"
                    placeholder="Your Name"
                    className="form-control"
                  />{" "}
                  {errors.name && (
                    <span className="text-danger">
                      {" "}
                      This field is required{" "}
                    </span>
                  )}
                </div>{" "}
                <div className="form-group">
                  <input
                    type="text"
                    ref={register({ required: true })}
                    name="phone"
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
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />{" "}
                  {errors.email && (
                    <span className="text-danger">
                      {" "}
                      This field is required{" "}
                    </span>
                  )}{" "}
                </div>{" "}
                <div className="form-group row">
                  <div className="col-4">
                    <select
                      className="form-control"
                      name="gender"
                      ref={register({ required: true })}
                    >
                      <option disabled={true} value="Not set">
                        {" "}
                        Select Gender{" "}
                      </option>{" "}
                      <option value="Male"> Male </option>{" "}
                      <option value="Female"> Female </option>{" "}
                      <option value="Not set"> Other </option>{" "}
                    </select>{" "}
                    {errors.gender && (
                      <span className="text-danger">
                        {" "}
                        This field is required{" "}
                      </span>
                    )}
                  </div>{" "}
                  <div className="col-4">
                    <input
                      ref={register({ required: true })}
                      className="form-control"
                      name="age"
                      placeholder="Your Age"
                      type="number"
                    />{" "}
                    {errors.age && (
                      <span className="text-danger">
                        {" "}
                        This field is required{" "}
                      </span>
                    )}{" "}
                  </div>{" "}
                  <div className="col-4">
                    <input
                      ref={register({ required: true })}
                      className="form-control"
                      name="weight"
                      placeholder="Weight"
                      type="number"
                    />{" "}
                    {errors.weight && (
                      <span className="text-danger">
                        {" "}
                        This field is required{" "}
                      </span>
                    )}{" "}
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
