import React, {useEffect} from "react";
import { useState } from "react";
import {useQuery} from "@apollo/client";
import queries from "../../graphql/queries";
import {useSelector} from "react-redux";
import store from "../../data-store/reducer/root-reducer";
import {doctorActions} from "../../data-store/actions/doctor-actions";
import {patientActions} from "../../data-store/actions/patient-actions";

const addAppoinmentListToStore = (appoinments) => {
  store.dispatch(patientActions.addAppointmentList(appoinments.getAppointments));
};

const MyAppointments = () => {
  const {loading, error} = useQuery(queries.getAppointmentList, {onCompleted: addAppoinmentListToStore,variables: {getAppointmentsId:"62c1dbdc8de3254ab1e020c2"}});
  const appointmentList = useSelector(state => state.patientDS.appointmentList);
  const [appointments, setAppointments] = useState(undefined);

  useEffect(()=>{
      if(appointmentList){
        setAppointments(appointmentList);
      }
  },[appointmentList])


    console.log(appointments);

  const renderTabRow = () => {
    let row = [];
    appointments?.map((item, key) => {
      row.push(
        <tr key={key}>
          <td>{item.channelCenter}</td>
          <td>{item.dctName}</td>
          <td>{item.date}</td>
          <td>{item.time}</td>
          <td>{item.aptNo}</td>
          <td>{item.refNo}</td>
          <td>{item.currAptNo}</td>
        </tr>
      );
    });

    return row;
  };
  return (
    <div className='myappointment-page'>
      <div className='table-responsive-md'>
        <table className='table table-bordered'>
          <thead>
            <tr className='myappointment-page-table-head'>
              <th scope='col'>Channeling Center</th>
              <th scope='col'>Doctor</th>
              <th scope='col'>Date</th>
              <th scope='col'>Time</th>
              <th scope='col'>No</th>
              <th scope='col'>Reference Number</th>
              <th scope='col'>Current Appointment Number</th>
            </tr>
          </thead>
          <tbody>{renderTabRow()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
