import React from 'react'

const Settings = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
       
                        <div className="modal-box mx-auto">

                            <form >
                                <h3 className='text-center text-3xl font-semibold mb-10'>Edit Profile</h3>
                                <div className="mb-4">

                                <label className="block dark:text-white text-gray-700 font-bold mb-2" htmlFor="photo">
                                        Upload Profile Photo
                                    </label>
                                <input id='photo' name='photo' type="file" className="file-input file-input-bordered file-input-success w-full " />
                                
                                      

                                </div>
                               
                                <div className="mb-4">
                                    <label className="block dark:text-white text-gray-700 font-bold mb-2" htmlFor="name">
                                        Full Name
                                    </label>
              
                                    <input type="text" id='name' name='name' placeholder="Md Shijan Ali" className="input input-bordered input-success w-full" />
                            
                               </div>
                        
                        



                                <div className="modal-action">
                                    <button type='submit' className="btn bg-[#00b22d] text-white hover:bg-[#00b22d]">Update</button>
                                </div>
                            </form>




                       </div>
         
          
    </div>
  )
}

export default Settings