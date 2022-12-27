import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [pickDate, setPickDate]=useState(new Date());
    return (
        <div>
            <AppointmentBanner
            pickDate={pickDate}
            setPickDate={setPickDate}
            ></AppointmentBanner>
            <AvailableAppointment
             pickDate={pickDate}
            ></AvailableAppointment>
        </div>
    );
};

export default Appointment;