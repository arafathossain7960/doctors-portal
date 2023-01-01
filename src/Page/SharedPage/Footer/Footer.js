import React from 'react';

import footerImg from '../../../assets/images/appointment.png';

const Footer = () => {
    return (
        <div style={{background:`url(${footerImg})`}} 
        className='my-16  py-6 '>
            <div className='text-center'>
              <p className='text-sm text-secondary'>Contact us</p>
              <h3 className='text-xl text-white'>Contact UsStay connected with us</h3>
              <input type="email" placeholder="Email" className="input w-full max-w-xs my-4" />
              <br />
              <input type="text" placeholder="Subject" className="input w-full max-w-xs mb-4" />
              <br />
              <textarea className="textarea mb-4 w-full max-w-xs text-accent" placeholder="Your massage"></textarea>
              <br />

            <button className='btn btn-primary btn-sm'>subscribe</button>


            </div>
        </div>
    );
};

export default Footer;