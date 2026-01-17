import React from 'react'
import { Link } from 'react-router-dom';

function HeroSection() {
    return ( 
        <div className='m-5 p-5 text-center border-bottom'>
            <h3>Quantara Products</h3>
            <p>Sleek, modern, and intuitive trading platforms</p>
            <p>Check out our <Link>investment offerings →</Link></p>
        </div>
     );
}

export default HeroSection;