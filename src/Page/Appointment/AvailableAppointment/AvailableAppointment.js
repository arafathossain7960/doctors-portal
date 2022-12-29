import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableAppointmentOption from '../AvailableAppointmentOptions/AvailableAppointmentOption';
import BookingModal from '../BokingModal/BookingModal';

const AvailableAppointment = ({pickDate}) => {
    const [availableOptions, setAvailableOptions]=useState([]);
    const [serviceName, setServiceName]=useState(null);
   useEffect(()=>{
    fetch('http://localhost:5000/appointmentOptions')
    .then(res => res.json())
    .then(data =>setAvailableOptions(data))
   },[])   
   
    return (
       <section className='my-16'>
         <div className='text-center'>
            <h2 className='text-secondary font-bold text-xl'>Available appointment {format(pickDate, 'PP') } </h2>
            <h4 className='text-lg'>Please select a service</h4>
        </div>
        <div className='mx-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                availableOptions.map(option =><AvailableAppointmentOption
                key={option.id}
                option={option}
                setServiceName={setServiceName}
                ></AvailableAppointmentOption>)
            }
        </div>
      {
        serviceName &&
        <BookingModal
        serviceName={serviceName}
        setServiceName={setServiceName}
        pickDate={pickDate}
        ></BookingModal>
      }
       </section>
    );
};

export default AvailableAppointment;