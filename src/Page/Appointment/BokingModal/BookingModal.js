import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({serviceName, setServiceName, pickDate}) => {
    const {name, slots}=serviceName;
    const date = format(pickDate, 'PP');

const handleBookingModal = e =>{
    e.preventDefault();
    const form = e.target;
    const patentName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const bookingModalInfo ={
        patentName,
        email,
        phone,
        bookingDate:date,
       service: name,
    }
    console.log(bookingModalInfo)
    setServiceName(null);
    form.reset();
}

    return (
  

<div>
  
<input type="checkbox" id="bookingModal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{name}</h3>

        {/*--------- start modal form ----------- */}
    <form onSubmit={handleBookingModal} className='mt-12 grid gap-2'>
    <input type="text" disabled value={date} className="input input-bordered w-full " />

    <select className="select select-bordered w-full ">
        {
            slots.length === 0 ? <option>Today is no time space</option>:
            slots.map(timeSlot =><option value={timeSlot}>{timeSlot}</option>)
        }
    </select>

    <input name='name' type="text" placeholder="Enter name" className="input input-bordered w-full " />
    <input name='email' type="email" placeholder="Email address" className="input input-bordered w-full " />
    <input name='phone' type="text" placeholder="Enter phone" className="input input-bordered w-full " />

  


    <input type="submit" value='Submit' className="btn btn-accent input input-bordered w-full " />

   
    </form>
  </div>
</div>
</div>
    );
};

export default BookingModal;