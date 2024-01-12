import React from 'react';
import img1 from './../../assets/img/contactUs/1.jpg';
import img2 from './../../assets/img/contactUs/2.jpg';
import { FaEnvelope, FaLocationArrow, FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto mt-10 text-center'>
                <h3 className='text-5xl text-black font-medium my-4 text-center'>Contact Us</h3>
                <hr className='my-5  mx-auto border-[#c0bfbf]' />
                <p className=' mx-auto flex w-1/2'><FaLocationArrow className='mt-1 me-1' /> <span>Hargram Bazar, Dhalur More, Rajshahi Court -6201, Rajshahi, Bangladesh</span></p>
            </div>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 w-10/12 mx-auto gap-8 mt-20'>
                <div className=" text-center">
                    <img className='w-32 h-32 rounded-full mx-auto' src={img1} alt="" />
                     <div className='w-52 mx-auto'>
                     <h3>Rakib Ahamed</h3>
                     <hr className='w-28 mx-auto border-cyan-300 my-4' />
                     <p className='flex'><FaEnvelope className='mt-1 me-1' /><span className='text-cyan-300 hover:underline underline-offset-4 cursor-pointer'>ahr990650@gmail.com</span></p>
                     <p className='flex'><FaWhatsapp className='mt-1 me-1' /><span className=''>+880 1757-611494</span></p>
                     </div>
                </div>
                <div className=" text-center">
                    <img className='w-32 h-32 rounded-full mx-auto' src={img2} alt="" />
                     <div className='w-52 mx-auto'>
                     <h3>Zakaria rahman khan</h3>
                     <hr className='w-28 mx-auto border-cyan-300 my-4' />
                     <p className='flex'><FaEnvelope className='mt-1 me-1' />
                     <span className='text-cyan-300 hover:underline underline-offset-4 cursor-pointer'>rafi989711@gmail.com</span></p>
                     <p className='flex'><FaWhatsapp className='mt-1 me-1' />
                     <span className=''>+88 01732623257</span>
                     </p>
                     </div>
                </div>
                

            </div>

        </div>
    );
};

export default ContactUs;