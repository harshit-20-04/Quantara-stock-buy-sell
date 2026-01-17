import React from 'react'
import SignupButton from '../SignupButton';

function HeroSection() {
    return ( 
        <div className='p-3'>
            <div className='row text-center'>
                <div className='col ml-5 mr-5'>
                    <img src='media/images/homeHero.png' alt='HeroImage' className='m-0 p-0 pb-5' style={{width:"100%"}} />
                    <h3>Invest in Everything</h3>
                    <p className='mt-3 mb-3'> Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds and more.</p>
                    <SignupButton/>
                </div>
            </div>
        </div>
     );
}

export default HeroSection;