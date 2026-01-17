import React from 'react';
import { Link } from 'react-router-dom';
function Content() {
    return (
        <div className='m-5 row' style={{ width: "100%" }}>
            <div className='col-md-5'>
                <div className='mb-5'>
                    <h5>Trust with confidence</h5>
                </div>
                <div className='mb-5 pr-5'>
                    <h5>Customer-first always</h5>
                    <p>That's why 1.6+ crore customers trust Quantara with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                </div>
                <div className='mb-5'>
                    <h5>No spam or gimmicks</h5>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <Link to='#'>Our philosophies</Link>.</p>
                </div>
                <div className='mb-5'>
                    <h5>The Quantara universe</h5>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                </div>
                <div className='mb-5'>
                    <h5>Do better with money</h5>
                    <p>With initiatives like <Link to='#'>Nudge</Link> and <Link to='#'>Kill Switch</Link>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
            </div>
            <div className='col'>
                <br />
                <img src='media/images/ecosystem.png' alt='Product image' style={{ width: "75%", height: "75%" }} />
                <p className='text-center mt-3'>

                    <Link to='#' className='m-2 p-2'>
                        Explore our products
                    </Link>
                    <Link to='#' className='m-2 p-2'>
                        Try Kite Demo
                    </Link>
                </p>
            </div>
            <div className='text-center'>
                <img src='media/images/pressLogos.png' />
            </div>
        </div>
    );
}

export default Content