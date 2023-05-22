import React from 'react';
import { Link } from 'react-router-dom';

const MyToys = ({ toy, handleDelete }) => {
    const { _id, name, seller_name, sub_category, price, available_quantity } = toy;
    return (
            <tbody>
                <tr>
                    <td><img className='w-20' src={toy.img} alt="" /></td>
                    <td>{name}</td>
                    <td>{seller_name}</td>
                    <td>{sub_category}</td>
                    <td>{price}</td>
                    <td>{available_quantity}</td>
                    <td><Link to={`/mytoy/${_id}`} className='btn bg-cyan-500 hover:bg-cyan-700 glass'>Update Information</Link></td>
                    <td><button onClick={() => handleDelete(_id)} className="btn btn-circle bg-red-400 glass hover:bg-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button></td>
                </tr>
            </tbody>
    );
};

export default MyToys;

