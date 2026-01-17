import React from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
    return (
        <div className='row flex'>
            <div className='col-lg-4 m-5 pt-5'>
                <h4>Unbeatable pricing</h4>
                <p className='pt-3'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <p><Link to="#">See Pricing</Link></p>
            </div>
            <div className='col-lg-5'>
                <div className='row col m-5 pt-5'>
                    <div className='col-4 flex'>
                        <img src='media/images/pricing0.svg' alt='accountopening' style={{width:"75px"}} />
                        <p className='pt-5' style={{fontSize:"0.5rem"}}>Free Account Opening</p>
                    </div>
                    <div className='col-4 flex'>
                        <img src='media/images/pricing0.svg' alt='equity delivery' style={{width:"75px"}} />
                        <p className='pt-5' style={{fontSize:"0.5rem"}}>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className='col-4 flex'>
                        <img src='media/images/pricingIntraday.svg' alt='intraday' style={{width:"75px"}} />
                        <p className='pt-5' style={{fontSize:"0.5rem"}}>Intraday and F&O</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;