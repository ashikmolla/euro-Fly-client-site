import React from 'react';
import VisaService from './VisaService';
import SchengenVisa from './SchengenVisa';

const ForJobSeekers = () => {
    return (
        <div className='bg-[#DCF2F1] p-10'>
            <div className='py-12 text-center'>
                <h1 className='text-4xl text-black font-medium'> For Job Seekers</h1>
            </div>
            <VisaService />
            <SchengenVisa/>

        </div>
    );
};

export default ForJobSeekers;