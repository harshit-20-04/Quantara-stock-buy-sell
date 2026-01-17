import React from 'react';
import { Link } from 'react-router-dom';

function Education() {
    return (
        <div className='row pt-5 m-5 pb-5'>
            <div className='col-md-6'>
                <img src='media/images/education.svg' alt='education' style={{ width: "70%" }} />
            </div>
            <div className='col-md-5 pt-2'>
                <h4 className='pt-2'>Free and open market education</h4>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <p className='pt-3 pb-3'><Link to='#'>Varsity</Link></p>
                <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <p><Link to='#'>TradingQ&A</Link></p>
            </div>
        </div>
    );
}

export default Education;