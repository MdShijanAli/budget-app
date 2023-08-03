import React from 'react';

import { FaUserCircle } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../../Components/ErrorPage/Header';


const DashboardLayout = () => {
  
   


    return (
        <div>

                 <Header/>
            
            <div className="drawer md:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-[#F2F2F2]">
                    <Outlet></Outlet>

                    

                </div>
                <div className="drawer-side bg-white mt-10 md:mt-0">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>


                    <div>

                        <div className="avatar w-full  mt-10">
                             {/* <div className="w-24 h-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"></div> */}
                
                <FaUserCircle className='w-24 h-24 mx-auto rounded-full ring ring-[#00b22d] ring-offset-base-100 ring-offset-2' />
                        </div>

                        <div className='text-center'>
                            <h2 className='text-2xl font-semibold'>Md Shijan Ali</h2>
                            <h4 className='font-semibold'>shijan135@gmail.com</h4>
                        </div>

                        <div className="divider"></div>

                        <ul className="menu p-4 lg:w-80 text-base-content">



                            <li className='text-xl'><NavLink to='/dashboard'>Dashboard</NavLink></li>

                            <li className='text-xl'><NavLink to='/dashboard/add-income'>Add Income</NavLink></li>
                            <li className='text-xl'><NavLink to='/dashboard/add-expense'>Add Expense</NavLink></li>
                            <li className='text-xl'><NavLink to='/dashboard/settings'>Settings</NavLink></li>


                        </ul>


                        <div className='mx-5'>
                            <NavLink  to='/login'>
                                <button className='btn bg-[#00b22d] hover:bg-[#00b22d] w-full text-white'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                    </svg>
                                    Logout
                                </button>
                            </NavLink>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;