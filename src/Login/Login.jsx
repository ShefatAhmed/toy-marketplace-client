import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../providers/AuthProvider';
import useTitle from '../hooks/useTitle';

const Login = () => {
    const [error, setError] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const { signIn , signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const userLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
                switch (error.code) {
                    case 'auth/invalid-email':
                      setErrorMessage('Please provide a valid email address.');
                      break;
                    default:
                      setErrorMessage('Please provide valid email and password.');
                      break;
                }
            })
    }
    const GoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log(error)
        })
    }
    useTitle('Login')
    return (
        <div>
            <div className="flex flex-col items-center justify-center my-24">
                <div className="w-full max-w-md py-16 px-6 bg-gray-200 rounded-lg shadow-md">
                    <h2 className="mb-4 text-center text-xl font-extrabold italic">LOGIN NOW !!</h2>
                    <form onSubmit={userLogin}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-800">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-black btn glass w-full px-4 py-2 bg-sky-50 rounded-full"
                        >
                            Sign In
                        </button>
                    </form>
                    {errorMessage && <p className='mt-3 text-red-500 text-center'><i className="fa-solid fa-triangle-exclamation"></i> {errorMessage}</p>}
                    <div className="mt-4 text-sm text-center text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-blue-500 hover:underline">
                            register now
                        </Link>
                    </div>
                    <hr className='h-1 bg-gradient-to-r from-cyan-100 via-yeallow-200 to-red-100 rounded-full my-3 mx-16' />
                    <button onClick={GoogleSignIn} className="flex items-center justify-center text-black btn glass w-full px-4 py-2 bg-sky-50 rounded-full">
                        <span className="mr-2">
                            <FcGoogle />
                        </span>
                        Sign In with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;