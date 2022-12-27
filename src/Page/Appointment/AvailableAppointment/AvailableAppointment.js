import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({pickDate}) => {
    return (
        <div>
            <h2>Available appointment {format(pickDate, 'PP') } </h2>
        </div>
    );
};

export default AvailableAppointment;