import React from 'react';

const Service = ({service}) => {
    const {serviceTitle, description, serviceImg}=service;
    return (
        <div className="card   shadow-xl">
        <figure><img src={serviceImg} alt="doctors" /></figure>
        <div className="card-body">
          <h2 className="card-title text-center">{serviceTitle}</h2>
          <p>{description}</p>
         
        </div>
      </div>
    );
};

export default Service;