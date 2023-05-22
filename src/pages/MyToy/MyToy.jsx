import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'
import MyToys from './MyToys';
import useTitle from '../../hooks/useTitle';

const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [toys, addToys] = useState([]);
    useEffect(() => {
        fetch(`https://toy-marketplace-server-shefatahmed.vercel.app/mytoy/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                addToys(data);
            });
    }, [user]);
    useTitle('My Toys')
    const handleDelete = id => {
        console.log(id);
        fetch(`https://toy-marketplace-server-shefatahmed.vercel.app/mytoy/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const currentToys = toys.filter(toy => toy._id !== id);
                    addToys(currentToys);
                }
                if (data.deletedCount) {
                    Swal.fire({
                        title: 'DELETE',
                        text: 'This toy has been successfully deleted. It will no longer be available.',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }

    return (
        <div className='mb-96 mt-16'>
            <h1 className='text-center font-bold text-3xl'>My Toys</h1>
            <div className="overflow-x-auto mx-8 my-16">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Toy Image</th>
                            <th>Cars Name</th>
                            <th>Seller Name</th>
                            <th>Cars category</th>
                            <th>Price</th>
                            <th>available quantity</th>
                            <th>Update information<br />
                                <span className='text-xs lowercase italic'>(Price, Quantity and Description)</span>
                            </th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    {
                        toys.map(toy => <MyToys
                            key={toy._id}
                            toy={toy}
                            handleDelete={handleDelete}
                        ></MyToys>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyToy;