import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle'

const Error = () => {
    useTitle('404')
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <img
                    src="https://i.ibb.co/cvgxwnV/Fix-Error.webp"
                    alt="404 Error"
                    className="w-full absolute h-full"
                />
                <div className='relative text-center  italic'>
                <Link className='btn glass bg-cyan-800 hover:bg-cyan-600 mt-5'>BACK TO HOMEPAGE</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;