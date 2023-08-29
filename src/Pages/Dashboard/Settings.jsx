import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider'
import { toast } from 'react-hot-toast';
import axios from 'axios';

const Settings = () => {
    const { UserInfo } = useContext(AuthContext);
    // console.log(`localhost:5000/user/${user?._id}`);

console.log("UserInfo", UserInfo)
    
   
  const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.displayName.value;
        const phone = form.phone.value;
        const country = form.country.value;
        const image = form.image.files[0];

        //  console.log(displayName,phone,country,photo)


        const formData = new FormData()
        formData.append('image', image)

        const url = 'https://api.imgbb.com/1/upload?key=8d6f88076c0d0741db9ce8b01104af0c'
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {

                if (imageData.success) {

                    const userInfo = {
                        displayName,
                        photoURL: imageData.data.url,
                        phone,
                        country


                    }
                    console.log(userInfo)

                    fetch(`https://budget-app-server.vercel.app/user/${UserInfo?._id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(userInfo)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                toast.success("Information Updated");
                                window.location.href= "/dashboard"
                            }
                            console.log(result)
                        })
                        .catch(err => {
                        console.log(err)
                    })
                }
            })
            .catch(err => {
            console.log(err)
        })
    
    } 


   




    return (
    <div className='flex justify-center items-center min-h-screen'>
       
                        <div className="modal-box mx-auto">

                          <form  onSubmit={handleSubmit}>
                                <h3 className='text-center text-3xl font-semibold mb-10'>Edit Profile</h3>
                                <div className="mb-4">

                                <label className="block dark:text-white text-gray-700 font-bold mb-2" htmlFor="image">
                                        Upload Profile Photo
                                    </label>
                     <input id='image' name='image' 
                            type="file"
                            
                          className="file-input file-input-bordered file-input-success w-full " /> 
                          
                                      

                                </div>
                               
                                <div className="mb-4">
                                    <label className="block dark:text-white text-gray-700 font-bold mb-2" htmlFor="displayName">
                                        Full Name
                                    </label>
              
                      <input
                          type="text"
                          id='displayName'
                            name='displayName'
                            
                          placeholder={UserInfo?.displayName}
                          className="input input-bordered input-success w-full" /> 
                       
                            
                               </div>
                                <div className="mb-4">
                                    <label className="block dark:text-white text-gray-700 font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
              
                      <input type="email"
                          disabled
                          id='email'
                          name='email'
                          placeholder={UserInfo?.email}
                          className="input input-bordered input-success w-full" /> 
                         
                            
                  </div>
                  
                                <div className="mb-4">
                                    <label className="block dark:text-white text-gray-700 font-bold mb-2" htmlFor="phone">
                                        Phone
                                    </label>
              
                      <input type="number"
                          id='phone' 
                          name='phone'
                            placeholder="+880 1571261165"
                            
                          className="input input-bordered input-success w-full" /> 
                         
                            
                  </div>
                  
                                <div className="mb-4">
                                    <label className="block dark:text-white text-gray-700 font-bold mb-2" htmlFor="country">
                                        Country
                                    </label>
              
                      <input type="text"
                          id='country' 
                          name='country'
                            placeholder="Les Vegas"
                            
                          className="input input-bordered input-success w-full" /> 
                         
                            
                               </div>
                        
                        



                                <div className="modal-action">
                       <button type='submit' className="btn bg-[#00b22d] text-white hover:bg-[#00b22d]">Update</button> 
                          
                  </div>
                  
                  </form>
                  




                       </div>
         
          
    </div>
  )
}

export default Settings;