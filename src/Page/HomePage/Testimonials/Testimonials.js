import React from 'react';
import TestimonialBgImg from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'; 
import people2 from '../../../assets/images/people2.png'; 
import people3 from '../../../assets/images/people3.png'; 
import Testimonial from './Testimonial';
const Testimonials = () => {

    const testimonialData = [
        {
            id:1,
            reviewerName:'Winson Henry',
            reviewerAddress:'California',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            reviewerImg:people1,
        },
        {
            id:2,
            reviewerName:'Winson Henry',
            reviewerAddress:'California',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            reviewerImg:people2,
        },
        {
            id:3,
            reviewerName:'Winson Henry',
            reviewerAddress:'California',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            reviewerImg:people3,
        },
    ]
    return (
        <div
        className='my-16'
        >
            <div className='flex justify-between'>
           <div>
           <h3 className='text-secondary text-xl'>Testimonials</h3>
            <h2 className='text-3xl'>What Our Patients Says</h2>
           </div>
           <figure>
            <img className='h-48' src={TestimonialBgImg} alt="" />
           </figure>

            </div>

            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    testimonialData.map(testimonial => <Testimonial
                    key={testimonial.id}
                    testimonial={testimonial}
                    
                    ></Testimonial>)

                    
                }
            </div>
        </div>
    );
};

export default Testimonials;
