import React, { useContext } from 'react';
import './style.css';
import { toast } from 'react-hot-toast';
import { FaUserCircle,FaUsers} from 'react-icons/fa';
import {GrLocation} from 'react-icons/gr';
import { BiSolidDashboard } from 'react-icons/bi';
import { AiFillSetting } from 'react-icons/ai';
import { GiPayMoney,GiReceiveMoney } from 'react-icons/gi';
import { NavLink, Navigate, Outlet, useNavigate } from 'react-router-dom';
import Header from '../../Components/ErrorPage/Header';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const DashboardLayout = () => {
    
    const { UserInfo,logOut } = useContext(AuthContext);
     
    

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('successfuly logout');
                
                toast.success('You have logged Out Successfully!!')
                window.location.href = '/';
            })
            .catch(error => {
                console.error('error', error.message)
            })
    }


    return (
        <div>

                 <Header/>
            
            <div className="drawer md:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-[#F2F2F2] ">
                   
                    <Outlet ></Outlet>

                    

                </div>
                <div className="drawer-side bg-[#101A33] mt-10 md:mt-0">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>


                    <div>

                        <div className="avatar w-full  mt-10">
                            {UserInfo? <div className="w-24 h-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={UserInfo?.photoURL} alt="" />
                             </div>:  <FaUserCircle className='w-24 h-24 mx-auto bg-[#fff] rounded-full ring ring-[#00b22d] ring-offset-base-100 ring-offset-2' /> }
                
               
                        </div>

                        <div className='text-center text-white'>
                            {
                                UserInfo ? <h2 className='text-2xl font-semibold'>{UserInfo?.displayName }</h2>: <h2 className='text-2xl font-semibold'>No Name</h2>
                            }
                            {
                                UserInfo ? <h4 className='font-semibold'>{UserInfo?.email}</h4> : <h4 className='font-semibold'>no-email@gmail.com</h4>
                            }
                          
                            
                        </div>

                        
                        <hr  className='my-10'/>

                        <ul className="menu p-4 lg:w-80 text-base-content  ">



                            <li className='text-xl '>
                            <NavLink className='text-white hover:text-[#00b22d]' to='/dashboard'>
                                       <BiSolidDashboard ></BiSolidDashboard>
                                       <span className='ml-2'> Dashboard</span>   
                                 </NavLink>
                            </li>

                            <li className='text-xl '>
                                <NavLink className='text-white hover:text-[#00b22d] ' to='/dashboard/add-income'>
                                      <GiReceiveMoney></GiReceiveMoney>
                                       <span className='ml-2'> Add Income</span>
                                 </NavLink>
                             </li>

                            <li className='text-xl '>
                                     <NavLink className='text-white hover:text-[#00b22d] ' to='/dashboard/add-expense'>
                                          <GiPayMoney></GiPayMoney>
                                          <span className='ml-2'>Add Expense</span>
                                     </NavLink>
                            </li>

                            {
                                UserInfo?.role == "Admin" ? <li className='text-xl '>
                                <NavLink className='text-white hover:text-[#00b22d] ' to='/dashboard/users'>
                                     <FaUsers></FaUsers>
                                     <span className='ml-2'>All User</span>
                                </NavLink>
                                </li> : <Navigate to="/dashboard"></Navigate>
                                    
                            }
                            

                            <li className='text-xl '>
                                <NavLink className='text-white hover:text-[#00b22d]' to='/dashboard/settings'>
                                      <AiFillSetting></AiFillSetting>
                                      <span className='ml-2'>Settings</span>
                                </NavLink>
                            </li>


                        </ul>


                        <div className='mx-5'>
                           
                                <button onClick={handleLogout} className='btn bg-[#00b22d] hover:bg-[#00b22d] w-full text-white'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                    </svg>
                                    Logout
                                </button>
                            
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;