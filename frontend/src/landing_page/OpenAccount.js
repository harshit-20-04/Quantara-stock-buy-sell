import React from 'react'
import SignupButton from './SignupButton';

function OpenAccount() {
    return ( 
        <div className='pt-5 pb-5 m-5 text-center'>
            <h4 className='pb-3'>Open a Quantara Account</h4>
            <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <SignupButton />
        </div>
     );
}

export default OpenAccount;