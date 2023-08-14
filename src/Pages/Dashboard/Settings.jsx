import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider'

const Settings = () => {
    const { UserInfo } = useContext(AuthContext);
    console.log(UserInfo);
  return (
    <div className='flex justify-center items-center min-h-screen'>
       
                        <div className="modal-box mx-auto">

                            <form >
                                <h3 className='text-center text-3xl font-semibold mb-10'>Edit Profile</h3>
                                <div className="mb-4">

                                <label className="block dark:text-white text-gray-700 font-bold mb-2" htmlFor="photo">
                                        Upload Profile Photo
                                    </label>
                      {
                          UserInfo ? <input id='photo' name='photo' type="file" className="file-input file-input-bordered file-input-success w-full " /> :
                          <input disabled id='photo' name='photo' type="file" className="file-input file-input-bordered file-input-success w-full " />
                               }
                                
                                      

                                </div>
                               
                                <div className="mb-4">
                                    <label className="block dark:text-white text-gray-700 font-bold mb-2" htmlFor="name">
                                        Full Name
                                    </label>
              
                      {
                          UserInfo ? <input type="text" id='name' name='name' placeholder={UserInfo?.name} className="input input-bordered input-success w-full" /> :
                          <input disabled type="text" id='name' name='name' placeholder="" className="input input-bordered input-success w-full" />
                                    }
                            
                               </div>
                                <div className="mb-4">
                                    <label className="block dark:text-white text-gray-700 font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
              
                      {
                          UserInfo ? <input disabled type="email" id='email' name='email' placeholder={UserInfo?.email} className="input input-bordered input-success w-full" /> :
                          <input disabled type="email" id='email' name='email' placeholder="" className="input input-bordered input-success w-full" />
                                }
                            
                               </div>
                                <div className="mb-4">
                                    <label className="block dark:text-white text-gray-700 font-bold mb-2" htmlFor="phone">
                                        Phone
                                    </label>
              
                      {
                          UserInfo ? <input type="number" id='phone' name='phone' placeholder="+880 1571261165" className="input input-bordered input-success w-full" /> :
                          <input disabled type="number" id='phone' name='phone' placeholder="" className="input input-bordered input-success w-full" />
                                    }
                            
                               </div>
                        
                        



                                <div className="modal-action">
                      {
                          UserInfo ? <button type='submit' className="btn bg-[#00b22d] text-white hover:bg-[#00b22d]">Update</button> :
                          <button disabled type='submit' className="btn bg-[#00b22d] text-white hover:bg-[#00b22d]">Update</button>
                                    }
                                </div>
                            </form>




                       </div>
         
          
    </div>
  )
}

export default Settings