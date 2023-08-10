import React from 'react';

const AboutUs = () => {
    return (
        <section
            className="relative py-24 md:py-32 text-white"
            style={{
                backgroundImage: 'url("https://www.experiencedmommy.com/wp-content/uploads/2020/04/Little-boy-playing-on-floor-with-cars-768x512.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="container relative z-10 mx-auto text-center">
                <h4 className="font-bold mb-2 uppercase">best toys ever</h4>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">We make your children <br /> happier with the best toys</h1>
                <button className="btn glass">
                    About Us
                </button>
            </div>
        </section>
    );
};

export default AboutUs;