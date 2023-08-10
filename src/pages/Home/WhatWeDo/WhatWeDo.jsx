import React from 'react';

const WhatWeDo = () => {
    return (
        <section className="flex flex-col md:flex-row p-8">
            <div className="md:w-1/2 p-4">
                <img
                    src="https://i.ibb.co/pzVh5rd/creative-image-1-copyright.jpg"
                    alt="What We Do"
                    className="w-full h-auto"
                />
            </div>
            <div className="md:w-1/2 md:flex md:flex-col md:justify-center p-4">
                <h4 className="font-bold uppercase mb-2">What We Do</h4>
                <h1 className="font-bold mb-4 text-6xl">We help organize events for kids</h1>
                <p className="mb-4">
                    Fun, educational activities for every occasion with premium toys and snacks. Learn more about our services!
                </p>
                <button className="btn bg-cyan-500 glass hover:bg-cyan-700">
                    Discover Now
                </button>
            </div>
        </section>
    );
};

export default WhatWeDo;