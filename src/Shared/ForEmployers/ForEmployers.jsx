import React from 'react';
import img1 from './../../assets/img/ForEmployers.jpg'

const ForEmployers = () => {
    return (
        <div className='p-20 bg-[#DCF2F1]'>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 container mx-auto px-10'>
                <div >
                    <h3 className='text-4xl text-black font-medium my-4'>
                        For Employers</h3>
                    <hr className='my-4  mx-auto border-[#c0bfbf]' />

                    <div className='lg:ms-10'>
                        <h1 className='text-3xl text-black my-4'>Services</h1>
                        <ul className='list-disc text-black'>
                            <li className='my-2'>Recruitment people from all over the world</li>
                            <li className='my-2'>
                                After recruitment we do interviews and take tests to make sure they are eligible  for the job
                            </li>
                            <li className='my-2'>After the tests we select the best candidates</li>
                            <li className='my-2'>We arrange medical examination for the selected candidates</li>
                            <li className='my-2'>Give candidates basic education about communication skill</li>
                            <li className='my-2'>After medical examination make an agreement with the candidates and prepare them for job</li>
                            <li className='my-2'>Complete their labor administration, reporting and declarations also.</li>
                            <li className='my-2'>Consulting with candidates and full supervision of them.</li>
                            <li className='my-2'>Build a better relation between company and candidates</li>
                        </ul>
                        <h1 className='text-3xl text-black my-4'>Prize Offer</h1>
                        <ul className='list-disc text-black'>
                            <li className='my-2'>If you are interested in our services, please contact with us.</li>
                        </ul>
                    </div>
                </div>
                <div className='lg:mt-24 '>
                    <img className='mx-auto w-11/12 mt-4' src={img1} alt="" />

                </div>

            </div>
        </div>
    );
};

export default ForEmployers;