import React from 'react';


const Testimonial = () => {
    return (
            <div className="flex flex-col items-center justify-center p-8">
                <h2 className="text-2xl font-bold mb-4">Download Our Mobile App</h2>
                <img className="w-56 h-auto" src="https://i.ibb.co/3Bd1hpK/app-store-png-logo-33115.png" alt="Google Play Store" />
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-tiktok"></i>
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
    );
};

export default Testimonial;