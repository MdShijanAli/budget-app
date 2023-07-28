import React from 'react';
import { FaGoogle } from 'react-icons/fa';



const LoginPage = () => {


    return (

      <div>
        

        <section className="bg-white lg:w-3/4 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
                    
                    
                <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                    <div className="xl:w-full w-2/3 2xl:max-w-md xl:mx-auto">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in to Continue</h2>
                        <p className="mt-2 text-base text-gray-600">Don’t have an account? <a to='/register' title="" className="font-medium text-[#00b22d] transition-all duration-200 hover:text-[#00b22d] hover:underline focus:text-[#00b22d">Create a free account</a></p>

                        <form method="POST" className="">
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="email" className="text-base font-medium text-gray-900"> Email address </label>
                                    <div className="mt-2.5">
                                        <input

                                            required
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Enter email to get started"
                                            className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-[#00b22d] focus:bg-white caret-blue-600"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="text-base font-medium text-gray-900"> Password </label>

                                        <a to='/reset-password' className="text-sm font-medium text-[#00b22d] hover:underline hover:text-[#00b22d] focus:text-[#00b22d]"> Forgot password? </a>
                                    </div>
                                    <div className="mt-2.5">
                                        <input
                                            type="password"
                                            required
                                            name="password"
                                            id="password"
                                            placeholder="Enter your password"
                                            className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-[#00b22d] focus:bg-white caret-blue-600"
                                        />
                                    </div>
                                </div>

                                <div className='text-red-600'>
                                    
                                </div>

                                <div>
                                    <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#00b22d] border border-transparent rounded-md focus:outline-none hover:bg-[#00b22d] focus:bg-[#00b22d">
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        </form>

                    
                    </div>
                </div>

                <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
                    <div>
                    <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="" alt="Phone image" />

    
                    </div>
                </div>
            </div>
        </section>


        </div>


    );
};

export default LoginPage;
