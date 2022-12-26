import React from 'react';

const InfoIcon = ({info}) => {


    const { infoTitle, bgColor, infoImage, description} =info;

    return (
        <div className={`card card-side px-6 text-white ${bgColor} shadow-xl`}>
        <figure><img src={infoImage}alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{infoTitle}</h2>
          <p>{description}</p>
        
        </div>
      </div>
    );
};

export default InfoIcon;