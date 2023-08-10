import React from 'react';

const ContactUs = () => {
    return (
        <section className="bg-gray-50 py-16 px-16">
            <div className="container mx-auto px-4 flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                    <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
                    <p className="text-gray-600 mb-8">
                        Have any questions or inquiries? Feel free to reach out to us!
                    </p>
                    <div className="flex items-center mb-4">
                        <svg
                            className="h-6 w-6 text-blue-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            ></path>
                        </svg>
                        <p className="text-gray-700">Email: support@toystars.com</p>
                    </div>
                    <div className="flex items-center">
                        <svg
                            className="h-6 w-6 text-blue-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            ></path>
                        </svg>
                        <p className="text-gray-700">Phone: (88) 01175823694 </p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <form className="max-w-md mx-auto">
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:border-blue-400"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:border-blue-400" 
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:border-blue-400"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn bg-cyan-500 glass hover:bg-cyan-700 w-full"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;