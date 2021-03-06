import React, { useContext } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { DataContext } from '../../App';
const PrescriptionModal = (props) => {
        const ContextData = useContext(DataContext);

        const { register, handleSubmit, watch, errors } = useForm()

        const onSubmit = (newPrescript, e) => {

            // Updating Data to DataContext 
            const newDataArray = Array.from(ContextData.allBookedAppointments);
            const selectedIndex = newDataArray.indexOf(props.selectAppointment);

            //Generating New prescription appending to previous
            const SelectedApForModify = {...props.selectAppointment };
            console.log("old", SelectedApForModify);
            const newPrescription = SelectedApForModify.prescription ? Array.from(SelectedApForModify.prescription) : [];
            newPrescription.push(newPrescript);

            SelectedApForModify.prescription = newPrescription;
            props.setSelectAppointment(SelectedApForModify);
            newDataArray.splice(selectedIndex, 1, SelectedApForModify);
            ContextData.setAllBookedAppointments(newDataArray);

            // Storing Data To Database

            const data = { id: props.selectAppointment._id, prescription: newPrescription }
            e.target.reset();

            fetch("http://localhost:3200/updatePrescription", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
                .catch(err => console.log(err))


        }
        return (

            <
            Modal isOpen = { props.modalIsOpen }
            onRequestClose = {
                () => props.setModalIsOpen(false)
            }
            style = {
                {
                    overlay: {
                        backgroundColor: "rgba(130,125,125,0.75)"
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        width: '40%',
                        transform: 'translate(-50%, -50%)'
                    }
                }
            } >
            <
            div className = "px-5 py-3" > {
                props.selectAppointment &&
                <
                div >
                <
                div className = "mb-3 mb-4 d-flex justify-content-between" >
                <
                span className = "text-primary" > { props.selectAppointment.patientInfo.name } < /span> <
                span > Gender: { props.selectAppointment.patientInfo.gender } < /span> <
                span > Age: { props.selectAppointment.patientInfo.age } < /span> < /
                div > <
                form className = "row add-prescription"
                onSubmit = { handleSubmit(onSubmit) } >
                <
                div className = "col-12" > {
                    errors.medicine && < span className = "text-danger" > Medicine Name must not empty! < br / > < /span>} {
                    errors.doge && < span className = "text-danger" > Doge Name must not empty! < br / > < /span>} {
                    errors.days && < span className = "text-danger" > Days Must not empty! < br / > < /span>} < /
                    div > <
                    input className = "form-control col-6"
                    ref = { register({ required: true }) }
                    name = "medicine"
                    placeholder = "Medicine Name"
                    type = "text" / >
                    <
                    select ref = { register({ required: true }) }
                    className = "form-control col-3"
                    name = "doge" >
                    <
                    option value = "1 - 1 - 1" > 1 - 1 - 1 < /option> <
                    option value = "1 - 0 - 1" > 1 - 0 - 1 < /option> <
                    option value = "1 - 0 - 0" > 1 - 0 - 0 < /option> <
                    option value = "1 - 1 - 0" > 1 - 1 - 0 < /option> <
                    option value = "1 - 1 - 0" > 1 - 1 - 0 < /option> <
                    option value = "0 - 1 - 1" > 0 - 1 - 1 < /option> <
                    option value = "1 - 0 - 0" > 1 - 0 - 0 < /option> <
                    option value = "0 - 0 - 1" > 0 - 0 - 1 < /option> < /
                    select > <
                    input ref = { register({ required: true }) }
                    name = "days"
                    className = "form-control col-2"
                    type = "number"
                    placeholder = "Days" / >
                    <
                    button type = "submit"
                    className = "btn btn-primary col-1" > < FontAwesomeIcon icon = { faPlus }
                    /></button >
                    <
                    /form> <
                    div className = "mt-5"
                    style = {
                        { height: "300px", overflow: "auto" }
                    } > {
                        props.selectAppointment.prescription &&

                        <
                        table className = "table table-borderless" > {
                            props.selectAppointment.prescription.length &&
                            props.selectAppointment.prescription.map((prescript, index) =>
                                <
                                tr >
                                <
                                td > { index + 1 }. < /td> <
                                td > { prescript.medicine } < /td> <
                                td > { prescript.doge } < /td> <
                                td > { prescript.days }
                                Days < /td> < /
                                tr >
                            )
                        }


                        <
                        /table>
                    } <
                    /div> < /
                    div >

                } <
                /div> < /
                Modal >
            );
        };

        export default PrescriptionModal;