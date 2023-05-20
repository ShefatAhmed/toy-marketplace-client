import React from 'react';
import { Link } from 'react-router-dom';

const ToyDetail = ({ toy }) => {
    const { name, seller_name, sub_category, price,  available_quantity } = toy;
    return (
        <tr>
            <th> </th>
            <td>{seller_name}</td>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td>{price}</td>
            <td>{available_quantity}</td>
            <td><Link className='btn bg-cyan-500 glass hover:bg-cyan-700'>View Details</Link></td>
        </tr>
    );
};

export default ToyDetail;