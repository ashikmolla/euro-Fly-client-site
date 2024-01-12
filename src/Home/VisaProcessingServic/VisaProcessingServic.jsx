import React from 'react';
import img1 from './../../assets/img/VisaProcessingServices/1.jpg'
import img2 from './../../assets/img/VisaProcessingServices/2.jpg'
import img3 from './../../assets/img/VisaProcessingServices/3.jpg'
import img4 from './../../assets/img/VisaProcessingServices/4.jpg'
import img5 from './../../assets/img/VisaProcessingServices/5.jpg'

const VisaProcessingServic = () => {
    return (
        <div>
            <div className="hero min-h-screen mt-10 px-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img src={img1} className="max-w-sm rounded-lg shadow-2xl my-1" />
                        <img src={img2} className="max-w-sm rounded-lg shadow-2xl my-1" />
                        <img src={img3} className="max-w-sm rounded-lg shadow-2xl my-1" />
                        {/* <img src={img4} className="max-w-sm rounded-lg shadow-2xl my-1" />
                        <img src={img5} className="max-w-sm rounded-lg shadow-2xl my-1" /> */}
                    </div>
                    <div className='md: ms-0 lg:ms-20'>
                        <h1 className="text-5xl font-bold">Visa Processing Services</h1>
                        <hr className='my-4 ' />

                        <ul>
                            <li className='my-4 py-2'><span className='text-black font-bold'>Insurance</span> <br /> <br />
                                We process both Schengen and Non- Schengen visa for Europe. We mainly process visa for Poland, Hungary, Italy, Croatia, Malta, Czech Republic, Lithuania etc. Schengen  visa. We also process Non - Schengen visa for Kosovo, United Kingdom, Republic of Ireland, Bulgaria, Romania, Serbia, Montenegro, Bosnia and Herzegovina, Turkey, Cyprus, Belarus, Azerbaijan, Albania and North Macedonia.
                            </li>
                            <li className='my-4 py-2'><span className='text-black font-bold '>Europe Visa Processing</span> <br /> <br />
                                We process Travel medical Health Insurance from some well known companies from all over the world.
                            </li>
                            <li className='my-4 py-2'><span className='text-black font-bold'>Skill and Job Experience Certificate</span> <br /> <br />
                                We help to get experience and provide skill and job experience certificate to them who does not have any experience before
                            </li>
                            <li className='my-4 py-2'><span className='text-black font-bold'>Air Ticket Booking</span> <br /> <br />
                                We provide domestic and international air tickets.
                            </li>
                            <li className='my-4 py-2'><span className='text-black font-bold'>Visa Application From</span> <br /> <br />
                                We also fill your visa application form as well as. Our experienced team will fill your visa in
                                a proper way and without any wrong. That will help you ensure your visa ratio.
                            </li>
                            <li className='my-4 py-2'><span className='text-black font-bold'>CV and Cover Letter</span> <br /><br /> 
                                For better visa ratio you have to provide better papers. Our experienced team will provide you normal or europas cv.
                            </li>
                            <li className='my-4 py-2'><span className='text-black font-bold'>Documents Preparation</span> <br /> <br />
                                We will prepare all your documents which are required for a visa.
                            </li>
                            <li className='my-4 py-2'><span className='text-black font-bold'>Viva Class </span> <br /> <br />
                                For facing the embassy, we also provide a viva class which is very essential.
                            </li>
                            <li className='my-4 py-2'><span className='text-black font-bold'>Visa Guidance</span> <br /><br /> 
                                Our team will Guide you for your visa A to Z
                            </li>
                        </ul>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default VisaProcessingServic;