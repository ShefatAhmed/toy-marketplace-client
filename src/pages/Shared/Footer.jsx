import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-5'>
            <footer className="bg-gray-800 text-white">
                <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-gray-700 py-7">
                    <div className='flex items-center me-20'>
                        <img src="https://i.ibb.co/Qcc9mJ4/attachment-62129397.png" className="w-20 md:ms-5" alt="" />
                        <h1 className="text-3xl font-bold"><span className="text-cyan-600">Toy</span><span className="text-yellow-500">Stars</span></h1>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder=" type your message"
                            className="text-gray-800
                            sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
                        />
                        <button
                            className="bg-teal-500 glass hover:bg-teal-700 duration-300 px-8 py-2.5 font-[Poppins]
                            rounded-md text-white md:w-auto w-full"
                        >
                            Send
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
                    <div>
                        <Link className='mb-5 font-bold'>PRODUCTS</Link>
                        <ul className='text-sm'>
                            <li><Link>Sports car</Link></li>
                            <li><Link>Truck</Link></li>
                            <li><Link>Mini fire truck</Link></li>
                            <li><Link>Police car</Link></li>
                        </ul>
                    </div>
                    <div>
                        <Link className='mb-5 font-bold'>RESOURCES</Link>
                        <ul className='text-sm'>
                            <li><Link to="/blog">Blog Page</Link></li>
                            <li><Link>Use cases</Link></li>
                        </ul>
                    </div>
                    <div>
                        <Link className='mb-5 font-bold'>COMPANY</Link>
                        <ul className='text-sm'>
                            <li><Link to="/blog">About us</Link></li>
                            <li><Link>Customer Stories</Link></li>
                            <li><Link>Diversity & inclusion</Link></li>
                        </ul>
                    </div>
                    <div>
                        <Link className='mb-5 font-bold'>CONTACT US</Link>
                        <p className='text-sm'>
                            Monsurabad, Bagha, Rajshahi <br />
                            Support: support@toystars.com <br />
                            Cell: 01175823694 , 01014583694 <br />
                            (Available : Mon - Fri, 09:00 AM to 6:00 PM)
                        </p>
                    </div>
                </div>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
                    text-center pt-2 text-gray-400 text-sm pb-8"
                >
                    <span>© 2023 Appy. All rights reserved.</span>
                    <span>Terms · Privacy Policy</span>
                    <div className='text-indigo-200 text-xl'>
                        <Link className='mx-5'><i className="fa-brands fa-facebook"></i></Link>
                        <Link className='mx-5'><i className="fa-brands fa-twitter"></i></Link>
                        <Link className='mx-5'><i className="fa-brands fa-instagram"></i></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;