import React from 'react';
import servis1 from '../../assets/img/vis-servic/home_airport_iconbox1.png';
import servis2 from '../../assets/img/vis-servic/home_airport_iconbox3.png';

const VisaService = () => {
    return (
        <div className=''>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-44 card rounded-box place-items-center">
                    <img className='cursor-pointer ' src={servis1} alt="" />
                </div>

                <div className="divider lg:divider-horizontal "></div>
                <div className="grid flex-grow h-44 card  rounded-box place-items-center">
                    <img className='cursor-pointer ' src={servis2} alt="" />
                </div>
            </div>

        </div>
    );
};

export default VisaService;