import React from 'react';
import DentalCare from '../DentalCare/DentalCare';
import InfoIcons from '../InfoIcons/InfoIcons';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <InfoIcons></InfoIcons>
           <Services></Services>
           <DentalCare></DentalCare>
           <MakeAppointment></MakeAppointment>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;