import React from 'react';
import TreatmentImg from '../../../assets/images/treatment.png'; 

const DentalCare = () => {
    return (
     <div className="card mt-16  md:card-side lg:card-side p-6  shadow-xl">
        <figure><img className='ml-10 round' src={TreatmentImg} alt="Movie"/></figure>
        <div className="card-body mx-12">
        <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
        <div className="card-actions justify-start">
            <button className="btn btn-primary ">Get Started</button>
        </div>
        </div>
    </div>
    );
};

export default DentalCare;