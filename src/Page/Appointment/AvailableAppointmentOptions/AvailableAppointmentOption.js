import React from 'react';

const AvailableAppointmentOption = ({ option, setServiceName}) => {
    const {id, name, slots}=option;
    return (
        <div className="card text-center  shadow-xl">
        <div className="card-body">
          <h2 className="text-xl  text-secondary" >{name}</h2>
          <p>{slots.length >0 ? slots[0]: 'Try another day'}</p>
          <p>{slots.length} {slots.length > 1 ? 'spaces': 'space'} </p>
          <div className="card-actions justify-center">
          
            <label htmlFor="bookingModal" className="btn btn-primary text-white" onClick={()=>setServiceName(option)}>Make appointment</label>
          </div>
        </div>
      </div>
    );
};

export default AvailableAppointmentOption;