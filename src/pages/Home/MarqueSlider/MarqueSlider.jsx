import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueSlider = () => {
    return (
        <Marquee className='mt-8' direction="right" speed={10} delay={5}>
            <div className='flex items-center gap-3 mx-5'>
                <div className='bg-yellow-500 p-5 border-l-4 border-b-4 border-yellow-800 rounded-lg'>
                    <p className='text-6xl text-center text-white'><i className="fa-solid fa-truck-fast"></i></p>
                </div>
                <div>
                    <h1 className='font-bold text-xl'>FREE DELIVERY</h1>
                    <p>WorldWide From $100</p>
                </div>
            </div>
            <div className='flex items-center gap-3 mx-5'>
                <div className='bg-red-500 p-5 border-l-4 border-b-4 border-red-800 rounded-lg'>
                    <p className='text-6xl text-center text-white'><i className="fa-solid fa-headset"></i></p>
                </div>
                <div>
                    <h1 className='font-bold text-xl'>SUPPORT</h1>
                    <p>24*7 Support</p>
                </div>
            </div>
            <div className='flex items-center gap-3 ms-5'>
                <div className='bg-sky-500 p-5 border-l-4 border-b-4 border-sky-800 rounded-lg'>
                    <p className='text-6xl text-center text-white'><i className="fa-solid fa-right-left"></i></p>
                </div>
                <div>
                    <h1 className='font-bold text-xl'>RETURN</h1>
                    <p>24*7 Free Return</p>
                </div>
            </div>
            <div className='flex items-center gap-3 ms-5'>
                <div className='bg-green-500 p-5 border-l-4 border-b-4 border-green-800 rounded-lg'>
                    <p className='text-6xl text-center text-white'><i className="fa-solid fa-money-bill-1-wave"></i></p>
                </div>
                <div>
                    <h1 className='font-bold text-xl'>PAYMENT</h1>
                    <p>100% Secure</p>
                </div>
            </div>
            <div className='flex items-center gap-3 ms-5'>
                <div className='bg-indigo-500 p-5 border-l-4 border-b-4 border-indigo-800 rounded-lg'>
                    <p className='text-6xl text-center text-white'><i className="fa-solid fa-gift"></i></p>
                </div>
                <div>
                    <h1 className='font-bold text-xl'>GIFT SERVICE</h1>
                    <p>Support Gift Service</p>
                </div>
            </div>
        </Marquee>
    );
};

export default MarqueSlider;