import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import leptop from '/src/assets/img/leptop.jpg'

const SocalLink = () => {
    return (
        <div className='px-10'>

            <div className="hero  py-8">
                <div className="hero-content my-12 flex-col lg:flex-row-reverse">
                    <div className="text-center  w-1/2 lg:ms-16 lg:text-left">
                        <p className='text-xl text-black font-sans'>At
                            <span className='font-bold'> EURO FLY </span> , we take pride in facilitating dreams, connections,
                            and opportunities.
                            Our mission is to simplify the complex journey of obtaining visas and travel documents, ensuring that your
                            aspirations are within reach.
                            With a commitment to excellence and a wealth of experience in the field, our dedicated team of experts is
                            here to guide you through the intricate web of visa processes. We understand that every journey is unique,
                            and we tailor our services to meet your specific needs.
                        </p>
                        <div className='inline-grid grid-cols-3 gap-4 mt-5 '>
                            <Link className='text-green-950 hover:text-black' target="_blank" to='https://www.instagram.com/jakariarahmanrafi?igsh=MWhlMDB6eHhweXVjeA=='><FaInstagram size={30} /></Link>
                            <Link className=' text-green-950 hover:text-black' target="_blank" to='https://www.facebook.com/profile.php?id=61555465702277&mibextid=rS40aB7S9Ucbxw6v'> <FaFacebook size={30} /></Link>
                            <Link className='text-green-950 hover:text-black' target="_blank" to='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsLSDPjzCVLMSlBrcwlTFWhbrTLzDRHXtkMtrQJjjkXpLmpshvTFrfdghgmgJpCwVLWJGCVg'><FaEnvelope size={30} /></Link>

                        </div>
                    </div>
                    <div className="card w-1/2 max-w-sm ">
                        <h2 className='font-bold font-serif sm:4xl md:text-5xl lg:text-6xl text-sky-600 mb-5'> EURO FLY </h2>
                        <img className='' src={leptop} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocalLink;