import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToys from './MyToys';

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
            })
    }
    
    return (
        <div className='mb-96'>
            {
                toys.map(toy => <MyToys 
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
                ></MyToys>)
            }
        </div>
    );
};

export default MyToy;