import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const SighUp = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const {createUser} = useContext(AuthContext);
    const handleRegister = event => {
        setSuccess('')
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const Img = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                setError('')
                setSuccess('User created successfully')
                updateUserData(result.user, name , Img);
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })    
    }
    const updateUserData = (user, name , Img) => {
        updateProfile(user, {
            displayName: name,
            photoURL: Img
        })
            .then(() => {
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div>
            <div className="flex flex-col items-center justify-center my-24">
                <h1 className="text-4xl font-bold mb-8">Sign Up</h1>
                <form onSubmit={handleRegister} className="w-full max-w-sm w-full max-w-md py-16 px-6 bg-gray-200">
                    <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                            Photo URL:
                        </label>
                        <input
                            type="text"
                            name="image"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Password:
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="flex items-center justify-center">
                    <button className="flex items-center justify-center text-black btn glass w-full px-4 py-2 bg-sky-50 rounded-full">
                        Sign Up
                    </button>
                    </div>
                </form>
                <div className="mt-4 text-sm text-center text-gray-600">
                        Allready have an account?{' '}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            please login
                        </Link>
                    </div>
            </div>
        </div>
    );
};

export default SighUp;