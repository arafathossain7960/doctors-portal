import React from 'react';
import clock from '../../../assets/icons/clock.svg';

const Icons = () => {
    return (
        <div className='flex text-white'>
            <div className='bg-primary rounded  m-4 flex justify-around items-center w-[450px] h-[190]'>
                <img className='font-8xl m-8' src={clock} alt="" />
                <div>
                    <h3>Opening ours</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className='bg-accent rounded m-4 flex justify-around items-center w-[450px] h-[150px]'>
                <img className='font-8xl m-8' src={clock} alt="" />
                <div>
                    <h3>Opening ours</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className='bg-secondary rounded  m-4 flex justify-around items-center w-[450px] h-[190]'>
                <img className='font-8xl m-8' src={clock} alt="" />
                <div className=''>
                    <h3>Opening ours</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Icons;