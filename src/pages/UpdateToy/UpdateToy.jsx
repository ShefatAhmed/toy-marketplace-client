import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateToy = () => {
    const toy = useLoaderData();
    const { price, description, available_quantity, _id } = toy;
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const available_quantity = form.available_quantity.value;

        fetch(`http://localhost:5000/mytoy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };
    return (
        <div className='py-5 px-8'>
            <form onSubmit={handleSubmit} className="max-w-2xl p-5 mx-auto bg-sky-50">
                <h1 className='text-center font-bold text-3xl my-8'>Update This Toy....</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-3">
                    <div>
                        <label className="block  text-xs font-bold font-medium text-gray-800">
                            Price
                        </label>
                        <input
                            type="number"
                            name='price'
                            defaultValue={price}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block  text-xs font-bold font-medium text-gray-800">
                            Available Quantity
                        </label>
                        <input
                            type="number"
                            name='available_quantity'
                            defaultValue={available_quantity}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="block  text-xs font-bold font-medium text-gray-800">
                            Detail Description
                        </label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            defaultValue={description}
                            rows="4"
                            required
                        ></input>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full mt-5 py-3 px-6 border border-transparent rounded-md shadow-sm font-bold font-medium text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 glass"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UpdateToy;