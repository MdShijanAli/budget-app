import React from 'react';

import { FaUserCircle } from 'react-icons/fa';
import { BiSolidDashboard } from 'react-icons/bi';
import { AiFillSetting } from 'react-icons/ai';
import { GiPayMoney,GiReceiveMoney } from 'react-icons/gi';
import { Link, Outlet } from 'react-router-dom';
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
                <div className="drawer-side bg-[#101A33] mt-10 md:mt-0">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>


                    <div>

                        <div className="avatar w-full  mt-10">
                             {/* <div className="w-24 h-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"></div> */}
                
                <FaUserCircle className='w-24 h-24 mx-auto bg-[#fff] rounded-full ring ring-[#00b22d] ring-offset-base-100 ring-offset-2' />
                        </div>

                        <div className='text-center text-white'>
                            <h2 className='text-2xl font-semibold'>Md Shijan Ali</h2>
                            <h4 className='font-semibold'>shijan135@gmail.com</h4>
                        </div>

                        
                        <hr  className='my-10'/>

                        <ul className="menu p-4 lg:w-80 text-base-content  ">



                            <li className='text-xl focus:text-red'>
                            <Link className='text-white hover:text-[#00b22d]' to='/dashboard'>
                                       <BiSolidDashboard ></BiSolidDashboard>
                                       <span className='ml-2'> Dashboard</span>   
                                 </Link>
                            </li>

                            <li className='text-xl active:text-red'>
                                <Link className='text-white hover:text-[#00b22d] active:text-red focus:text-red' to='/dashboard/add-income'>
                                      <GiReceiveMoney></GiReceiveMoney>
                                       <span className='ml-2 focus:text-red'> Add Income</span>
                                 </Link>
                             </li>

                            <li className='text-xl active:text-red'>
                                     <Link className='text-white hover:text-[#00b22d] active:text-red focus:text-red' to='/dashboard/add-expense'>
                                          <GiPayMoney></GiPayMoney>
                                          <span className='ml-2 focus:text-red'>Add Expense</span>
                                     </Link>
                            </li>

                            <li className='text-xl '>
                                <Link className='text-white hover:text-[#00b22d]' to='/dashboard/settings'>
                                      <AiFillSetting></AiFillSetting>
                                      <span className='ml-2'>Settings</span>
                                </Link>
                            </li>


                        </ul>


                        <div className='mx-5'>
                            <Link  to='/login'>
                                <button className='btn bg-[#00b22d] hover:bg-[#00b22d] w-full text-white'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                    </svg>
                                    Logout
                                </button>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;