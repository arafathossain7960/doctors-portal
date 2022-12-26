import React from 'react';
import InfoIcon from '../InfoIcons/InfoIcon';
import InfoIcons from '../InfoIcons/InfoIcons';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <InfoIcons></InfoIcons>
        </div>
    );
};

export default Home;