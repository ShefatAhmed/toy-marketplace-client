import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'
import useTitle from '../../hooks/useTitle';

const AddAtoy = () => {
    const { user } = useContext(AuthContext);
    const [selectedValue, setSelectedValue] = useState('');
    const subCategoryOptions = ['sports-car', 'truck', 'regular-car', 'mini-fire-truck', 'mini-police-car'];

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const img = form.img.value;
        const name = form.name.value;
        const seller_name = user.displayName;
        const seller_email = user.email;
        const sub_category = selectedValue;
        const price = form.price.value;
        const rating = form.rating.value;
        const available_quantity = form.available_quantity.value;
        const description = form.description.value;
        const newToy = { img, name, seller_name, seller_email, sub_category, price, rating, available_quantity, description };
        console.log(newToy);

        // 
        fetch('https://toy-marketplace-server-shefatahmed.vercel.app/toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Wow...',
                        text: 'A toy has been successfully added',
                        icon: 'success',
                        confirmButtonColor: '#48D1CC',
                        confirmButtonText: 'Okay'
                      })
                }
            })
        event.target.reset('');
    };
    useTitle('Add A Toy')
    return (
        <div className='py-5 px-8'>
            <form onSubmit={handleSubmit} className="max-w-2xl p-5 mx-auto bg-sky-50">
                <h1 className='text-center font-bold text-3xl my-1'>Add A Toy....</h1>
                <div className="grid grid-cols-1 gap-3 mt-3 md:grid-cols-2">
                    <div>
                        <label className="block  text-xs font-bold font-medium text-gray-800">
                            Toy Image URL
                        </label>
                        <input
                            type="text"
                            name='img'
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block  text-xs font-bold font-medium text-gray-800">
                            Toy Name
                        </label>
                        <input
                            type="text"
                            name='name'
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block  text-xs font-bold font-medium text-gray-800">
                            Toy Category
                        </label>
                        <select onChange={(e) => setSelectedValue(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="">Select Toy Category</option>
                            {subCategoryOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block  text-xs font-bold font-medium text-gray-800">
                            Price
                        </label>
                        <input
                            type="number"
                            name='price'
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block  text-xs font-bold font-medium text-gray-800">
                            Rating
                        </label>
                        <input
                            type="number"
                            name='rating'
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="block  text-xs font-bold font-medium text-gray-800">
                            Detail Description
                        </label>
                        <textarea
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            name='description'
                            rows="4"
                            required
                        ></textarea>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full mt-3 py-3 px-6 border border-transparent rounded-md shadow-sm font-bold font-medium text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 glass"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddAtoy;