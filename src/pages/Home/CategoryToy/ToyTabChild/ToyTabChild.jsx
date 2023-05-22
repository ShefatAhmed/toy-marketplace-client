import React from 'react';
import { Link } from 'react-router-dom';
const ToyTabChild = ({ toy }) => {
    const { img, name, price, rating } = toy;
    return (
        <div className="max-w-lg rounded shadow-lg">
            <img className="w-full h-96 md:px-16 object-cover" src={img} alt="Card" />
            <div className='text-center'>
                <h1 className='text-3xl font-bold mb-3'>{name}</h1>
                    <p><span className='font-bold'>Price:</span> ${price}</p>
                    <div className="flex items-center justify-center mb-4">
                        <span className="text-yellow-400 text-lg mr-1">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                        <span className="text-gray-600">({rating} Rating)</span>
                    </div>
                <Link to={`/toy/${toy._id}`} className='btn bg-cyan-500 glass w-full hover:bg-cyan-700'>View Details</Link>
            </div>

        </div>
    );
};

export default ToyTabChild;