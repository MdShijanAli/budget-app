import React from 'react';
import { Link } from 'react-router-dom';


const ResetPage = () => {




    return (
      <div className='h-screen bg-[#EEF2FF]'>
          
                    <form  className="card ">
                        <div className="card-body  bg-white md:w-1/3 w-3/4 mx-auto shadow-xl my-52 rounded-3xl">
                            <h2 className="card-title">Reset Password!!!</h2>
                            <input
                                
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter email address"
                                className="block mt-5 w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 bg-gray-50 rounded-md  caret-blue-600 focus:outline-none focus:border-[#00b22d] focus:bg-white focus:ring-1 focus:ring-[#00b22d]"
                                required
                            />
                            <div className="card-actions justify-center mt-5 gap-3">
                              
                              
                                    <button className="btn bg-[#00b22d] text-white hover:text-black border-[#00b22d] hover-bg-[#00b22d]">Reset Password</button>
                                    <Link to="/login">
                                        <button className='btn btn-neutral '>Back</button>
                                    </Link>
                              
                            </div>
                        </div>
                    </form>
           </div>
       
    );
};

export default ResetPage;