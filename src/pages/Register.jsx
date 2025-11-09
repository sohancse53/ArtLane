import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import Authcontext from '../context/Authcontext';
import toast from 'react-hot-toast';

const Register = () => {
    const [error,setError] = useState('');
    const {createUser,updateUser,googleLogin} = use(Authcontext);
    
    const handleRegister = (e)=>{
        e.preventDefault();
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;
        const uppercaseRegex = /[A-Z]/ ;
        const lowercaseRegex = /[a-z]/;
        const lengthRegex = /^.{6,}$/;
        setError('')
        if(!uppercaseRegex.test(password)){
            setError('password must contain uppercase letter')
            return
        }
        if(!lowercaseRegex.test(password)){
            setError('password must contain lower letter')
            return
        }
        if(!lengthRegex.test(password)){
            setError('password length must be 6 or greater')
            return
        }
        // console.log(displayName,email,photoURL,password);
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            updateUser({displayName,photoURL})
            .then(()=>{
                toast.success("You have Registered Successfully");
                 console.log(result.user);
            })
            .catch(error=>{
                console.log(error.message);
                setError(error.message);
                toast.error(error.message);
            })
            
        })
        .catch(error=>{
            console.log(error.message);
            setError(error.message);
                toast.error(error.message);
        })

    }

    const handleGoogle = ()=>{
        setError('');
        googleLogin()
        .then(result=>{
            console.log(result.user);
            toast.success("Sign ip with google Successful");
        })
        .catch(error=>{
            console.log(error.message);
            setError(error.message);
            toast.error(error.message)
            
        })
    }
    return (
       
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md mx-auto mt-10">
                <title>Register</title>
                <h2 className="text-3xl font-bold text-center mb-6">Create an Account</h2>

                <form onSubmit={handleRegister} className="space-y-3">
                    {/* name */}
                    <div>   
                        <label className="block text-gray-700 font-medium mb-1">Name</label>
                        <input 
                            name='name'
                            type="text" 
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 focus:px-6  transition-all outline-none border-gray-400 border-b"
                        />
                    </div>
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
                        {/* photo */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Photo URL</label>
                        <input 
                            name ='photoURL'
                            type="text" 
                            placeholder="Enter photo URL"
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
                        <p className="text-sm text-red-500 mt-1">
                           {
                            error && error
                           }
                        </p>
                    </div>

                    <button 
                        type="submit" 
                        className="btn btn-secondary text-base-100 w-full rounded-lg"
                    >
                       Register
                    </button>
                </form>

                <div className="my-4 flex items-center">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-2 text-gray-500">or</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                <button onClick={handleGoogle} className="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <FcGoogle className="mr-2 text-xl"/> Sign up with Google
                </button>

                <p className="mt-4 text-center text-gray-600">
                    Already have an account? <Link to="/login" className="text-blue-500 font-semibold">Login</Link>
                </p>
            </div>
        
    );
};

export default Register;