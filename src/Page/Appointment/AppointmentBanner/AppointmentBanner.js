import React from 'react';
import { DayPicker } from 'react-day-picker';
import appointmentBg from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';


const AppointmentBanner = ({pickDate,setPickDate}) => {
    // const [pickDate, setPickDate]=useState(new Date());

    return (
        <section className='mt-16 my-8 mx-16'  style={{background:`url(${appointmentBg})`}} >
        <div className="hero ">
       <div className="hero-content flex-col lg:flex-row-reverse">
         <img src={chair} alt='chair' className="max-w-sm rounded-lg shadow-2xl" />
         <div>
      
       <DayPicker
      mode='single' 
      selected={pickDate}
      onSelect={setPickDate}
     />  

      
         </div>
       </div>
     </div>
   
   <div className='text-center'>
    
   </div>
    </section>
    );
};

export default AppointmentBanner;