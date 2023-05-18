import React from 'react';
const Banner = () => {

  return (
    <div className="bg-gradient-to-r from-sky-400 to-indigo-400 text-white py-8 px-4">
      <div className="max-w-4xl mx-auto flex items-center justify-center">
        <img
          className="h-16 md:h-48 object-cover border-white mr-10"
          src="https://i.ibb.co/HGRbGsb/pngegg-1.png"
          alt="First Image"
        />
        <div className="flex flex-col text-center md:mx-8">
          <h1 className="text-4xl font-extrabold mb-4 ">Spring Savings</h1>
          <p>Seasonal Sale - up to 60% off</p>
          <button className="btn text-black glass sm:btn-sm mt-3">Shop Now</button>
        </div>
        <img
          className="h-16 md:h-48 object-cover border-white ml-10"
          src="https://i.ibb.co/5vLHgWJ/pngegg.png"
          alt="Second Image"
        />
      </div>
    </div>
  );
};

export default Banner;

