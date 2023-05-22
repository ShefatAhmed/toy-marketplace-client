import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <img
                    src="https://i.ibb.co/cvgxwnV/Fix-Error.webp"
                    alt="404 Error"
                    className="w-full absolute h-full"
                />
                <div className='relative text-center  italic'>
                <h1 className='text-4xl font-extrabold text-slate-100'>Opps...</h1>
                <h1 className='text-4xl font-extrabold text-lime-100'>Page Not Found</h1>
                <p className='text-xl text-white font-bold'>Something went wrong. This page doesn't exist</p>
                <Link className='btn glass bg-cyan-800 hover:bg-cyan-600 mt-5'>BACK TO HOMEPAGE</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;