import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import Authcontext from '../context/Authcontext';
import toast from 'react-hot-toast';

const Login = () => {
    const [error,setError]= useState('')
    const {user,logIn,googleLogin}= use(Authcontext);
    const navigate = useNavigate();
    const handleLogin = (e)=>{
        setError('');
         e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        logIn(email,password)
        .then(result=>{
            console.log(result.user);
            
            toast.success('Login Successful');
            e.target.reset();
             navigate('/');
        })
        .catch(error=>{
            console.log(error.message);
            toast.error(error.message);
            setError(error.message);
        })
      
    }

     const handleGoogle = ()=>{
        setError('');
        googleLogin()
        .then(result=>{
            console.log(result.user);
            toast.success("Sign ip with google Successful");
            navigate('/');
        })
        .catch(error=>{
            console.log(error.message);
            setError(error.message);
            toast.error(error.message)
            
        })
    }

    return (
       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md mx-auto mt-10">
                <title>Login</title>
                <h2 className="text-3xl font-bold text-center mb-6">Log In to Account</h2>

                <form onSubmit={handleLogin} className="space-y-3">
                
                        {/* email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input 
                            name='email'
                            type="email" 
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 focus:px-6  transition-all outline-none border-gray-400 border-b"
                        />
                    </div>
                   
                                {/* password */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Password</label>
                        <input 
                            name='password'
                            type="password" 
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 focus:px-6  transition-all outline-none border-gray-400 border-b"
                        />
                        
                    </div>

                    <button 
                        type="submit" 
                        className="btn btn-secondary text-base-100 w-full rounded-lg"
                    >
                       Login
                    </button>
                </form>

                <p className="text-sm text-red-500 mt-1">
                           {
                           //error lekho
                           error && error
                           }
                        </p>

                <div className="my-4 flex items-center">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-2 text-gray-500">or</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                <button onClick={handleGoogle} className="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <FcGoogle className="mr-2 text-xl"/> Log In with Google
                </button>

                <p className="mt-4 text-center text-gray-600">
                    Don't have an account? <Link to="/register" className="text-blue-500 font-semibold">Register</Link>
                </p>
            </div>
    );
};

export default Login;