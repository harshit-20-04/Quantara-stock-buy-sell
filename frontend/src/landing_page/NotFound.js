import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container p-5 m-5'>
            <h3>404</h3>
            <p>We couldn't find the page you were looking for.</p>
            <p>Visit <Link to='/'>Quantara's home page</Link></p>
        </div>
     );
}

export default NotFound;