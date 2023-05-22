import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const SingleToys = () => {
    const singledata = useLoaderData();
    const { img, name, seller_name, seller_email, price, rating, available_quantity, description } = singledata;
    return (
        <div>
            <div className="pb-8">
                <div className="container mx-auto px-8">
                    <div className="relative px-auto">
                        <img src={img} alt="" className="w-1/2 mx-auto object-cover" />
                    </div>
                    <div className='bg-sky-50 p-16'>
                    <h1 className="text-3xl font-bold mb-4">{name}</h1>
                    <p className="text-gray-600 mb-4">Seller: {seller_name}</p>
                    <p className="text-gray-600 mb-4">Email: {seller_email}</p>
                    <p className="text-xl font-bold mb-2">Price: ${price}</p>
                    <div className="flex items-center mb-4">
                        <span className="text-yellow-400 text-lg mr-1">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                        <span className="text-gray-600">({rating}k Rating)</span>
                    </div>
                    <p className="mb-6">Available Quantity: {available_quantity}</p>
                    <h2 className="text-xl font-bold mb-2">Cars Description</h2>
                    <p className="text-gray-600">
                        {description}
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToys;

