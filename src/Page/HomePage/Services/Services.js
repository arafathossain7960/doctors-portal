import React from 'react';
import Fluoride from '../../../assets/images/fluoride.png';
import Cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const servicesData =[
        {
            id:1,
            serviceTitle:'Fluoride Treatment',
           description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, expedita.',
           serviceImg:Fluoride
        },
        {
            id:2,
            serviceTitle:'Cavity Filling',
           description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, expedita.',
           serviceImg:Cavity
        },
        {
            id:3,
            serviceTitle:'Teeth Whitening',
           description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, expedita.',
           serviceImg:whitening
        }
    ]
    return (
        <div className='my-4'>
            <div className='my-6  text-center'>
                <h3 className='text-primary font-5'>Our service </h3>
                <h2 className='font-8 bold'>Service we provide</h2>


            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center'>
                {
                    servicesData.map(service => <Service
                    key={service.id}
                    service={service}
                    >

                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;