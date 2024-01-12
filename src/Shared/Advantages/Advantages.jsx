import React from 'react';
import img from './../../assets/img/advantages.jpg'


const Advantages = () => {
    return (
        <div>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 container mx-auto px-10 my-28'>
                <div>
                    <img className='w-11/12' src={img} alt="" />

                </div>
                <div>
                    <h3 className='text-5xl text-black font-medium my-4'>Advantages</h3>
                    <hr className='my-5  mx-auto border-[#c0bfbf]' />
                    <ul className='list-disc px-8 cursor-pointer'>
                        <li className='my-2 hover:underline underline-offset-4'>We Process Visa for more than 8 years</li>
                        <li className='my-2 hover:underline underline-offset-4'>We have got 200+ visa Successfully</li>
                        <li className='my-2 hover:underline underline-offset-4'>We process Visa in a very Short Time </li>
                        <li className='my-2 hover:underline underline-offset-4'>We can process visa faster than others</li>
                        <li className='my-2 hover:underline underline-offset-4'>We have a large qualified team</li>
                        <li className='my-2 hover:underline underline-offset-4'>Our procced file is more appropriate than normal files</li>
                        <li className='my-2 hover:underline underline-offset-4'>We have better visa ratio</li>
                        <li className='my-2 hover:underline underline-offset-4'>Our team is very co-operative and punctual</li>

                    </ul>

                </div>

            </div>

        </div>
    );
};

export default Advantages;