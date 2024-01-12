import React from 'react';
import img1 from './../../assets/img/schengen/11.jpg'
import img2 from './../../assets/img/schengen/22.jpg'
import img3 from './../../assets/img/schengen/33.jpg'
const SchengenVisa = () => {
    return (
        <div className='mt-10'>

            {/* frist section  */}

            <div className="hero min-h-screen px-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img1} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Schengen Visa</h1>
                        <div className="py-6">
                            <p className='my-2'>
                                We process the Schengen work, student, tourist and other types of visas.
                            </p>
                            <p className='my-2'>
                                Schengen - Countries are – Austria, Belgium, Czech Republic, Croatia, Denmark,
                                Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy, Latvia, Lithuania,
                                Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden,
                                Switzerland, Liechtenstein
                            </p>
                            <p className='my-2'>
                                Schengen refers to the EU passport-free zone that covers most European countries.
                                It's the largest free travel area in the world.

                            </p>
                            <p className='my-2'>
                                A Schengen visa is a short-stay visa that allows a person to travel to any member of the Schengen Area,
                                per stay up to 90 days for tourism or business purposes.
                            </p>
                            <p className='my-2'>
                                The Schengen visa is the most common visa for Europe.
                                It enables its holder to enter, freely travel within,
                                and leave the Schengen zone from any of the Schengen member countries.
                                There are no border controls within the Schengen Zone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* second section  */}

            <div className="hero min-h-screen px-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img2} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Non-Schengen Visa</h1>
                        <div className="py-6">
                            <p className='my-2'>
                                We process non - Schengen work, student, tourist and others type of visas. We process Bangladesh
                                to non-Schengen and Non-Schengen to Schengen Visa also.
                            </p>
                            <p className='my-2'>
                                Non- Schengen Countries are - United Kingdom, Republic of Ireland, Bulgaria, Romania, Serbia,
                                Montenegro, Bosnia and Herzegovina, Turkey, Cyprus, Belarus, Azerbaijan, Albania and North Macedonia.
                            </p>
                            <p className='my-2'>
                                Which Countries are not part of Schengen are called non-Schengen Country?
                                The main difference between Schengen and Non-Schengen is There are no border controls within the Schengen Zone.
                                On the other hand, Non-Schengen Zone has border limit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            {/* threed section */}
            <div className="hero min-h-screen px-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img3} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold"> Others Countries Visa</h1>
                        <div className="py-6">

                            <p className='my-2'>
                                Who wants to go to Europe countries for better job or for better life style from other countries like Saudi Arabia, Qatar,
                                United Arab Emirates,
                                Malaysia, Singapore, Pakistan etc we also process their file.
                            </p>


                        </div>
                    </div>
                </div>
            </div>



















        </div>
    );
};

export default SchengenVisa;