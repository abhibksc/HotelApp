import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-blue-950 text-white py-10 p-5'>
      <div className='container flex justify-around'>
        {/* About Section */}
        <div>
          <h2 className='text-lg font-bold mb-4'>About Us</h2>
          <p className='text-sm'>Contact Us</p>
          <p className='text-sm'>About Us</p>
          <p className='text-sm'>Careers</p>
          <p className='text-sm'>Your Stories</p>
          <p className='text-sm'>Corporate</p>
          <p className='text-sm'>Information</p>

        </div>
        {/* Useful Links */}
        <div>
          <h2 className='text-lg font-bold mb-4'>Useful Links</h2>
          <p className='text-sm'>Contact Us</p>
          <p className='text-sm'>About Us</p>
          <p className='text-sm'>Careers</p>
          <p className='text-sm'>Your Stories</p>
          <p className='text-sm'>Corporate</p>
          <p className='text-sm'>Information</p>
        </div>
        {/* Customer Service */}
        <div>
          <h2 className='text-lg font-bold mb-4'>Customer Service</h2>
          <p className='text-sm'>Contact Us</p>
          <p className='text-sm'>About Us</p>
          <p className='text-sm'>Careers</p>
          <p className='text-sm'>Your Stories</p>
          <p className='text-sm'>Corporate</p>
          <p className='text-sm'>Information</p>
        </div>

        


        
        <div> 
          <h2 className='text-lg font-bold mb-4'>Contact Us</h2>
          <p className='text-sm'>Contact Us</p>
          <p className='text-sm'>About Us</p>
          <p className='text-sm'>Careers</p>
          <p className='text-sm'>Your Stories</p>
          <p className='text-sm'>Corporate</p>
          <p className='text-sm'>Information</p>
        </div>
      
      </div>
      <div className='container mx-auto text-center mt-8'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} Grocery App. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
