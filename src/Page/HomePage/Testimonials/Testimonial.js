import React from 'react';

const Testimonial = ({testimonial}) => {
    const {id, reviewerName,reviewerAddress,review,reviewerImg}=testimonial;
    return (
<div className="card ">
  <div className="card-body items-center text-center">
   
    <p className='my-6 text-ms'>{review}</p>
    <div className="card-actions flex  items-center">
        <figure>
            <img className='h-16 mr-4 ' src={reviewerImg} alt="" />
        </figure>
        <span>
            <h3 className='font-bold text-accent'>{reviewerName}</h3>
            <p className='text-sm'>{reviewerAddress}</p>
        </span>
    </div>
  </div>
</div>
    );
};

export default Testimonial;
