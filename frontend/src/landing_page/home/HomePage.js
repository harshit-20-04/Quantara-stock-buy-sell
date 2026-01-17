import React from 'react';
import HeroSection from './HeroSection';
import Education from './Education';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';
import Content from './Content';

function HomePage() {
    return ( 
        <>
            <HeroSection />
            <Content />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
     );
}

export default HomePage;