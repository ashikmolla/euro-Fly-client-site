import React from 'react';
import SocalLink from '../SocalLink/SocalLink';
import International from '../International/International';
import ForJobSeekers from '../../Shared/ForJobSeekers/ForJobSeekers';
import VisaProcessingServic from '../VisaProcessingServic/VisaProcessingServic';
import ForEmployers from '../../Shared/ForEmployers/ForEmployers';
import Advantages from '../../Shared/Advantages/Advantages';
import ContactUs from '../../Shared/ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <SocalLink />
            <International />
            <ForJobSeekers />
            <VisaProcessingServic />
            <ForEmployers/>
            <Advantages/>
            <ContactUs />

        </div>
    );
};

export default Home;