import React, { useContext } from 'react'
import { ImBin } from 'react-icons/im';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Users = () => {
  const { users } = useContext(AuthContext);
  console.log(users);


  return (
    <div className='mx-2 md:mx-10 my-10'>
        <h1 className='text-center text-3xl my-5 font-bold'>All Users</h1>
      <div className="bg-white">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Avater</th>
        <th>Name</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
      
            {
              users.map(user=> <tr key={user?._id} className='hover'>
        
              <td>
                         <div className="flex items-center space-x-3">
                           <div className="avatar">
                             <div className="mask mask-circle w-12 h-12">
                               <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                             </div>
                           </div>
                         
                         </div>
               </td>
               <td>
                         <div>
                    <div className="font-bold">{ user?.displayName}</div>
                    <div className="badge badge-ghost badge-sm">{user?.email}</div>
                       </div>
               </td>
               <td>
                {user?.country}               </td>
               <td>
                 {user?.phone}
               </td>
                <td>{user?.role}</td>
               <td>
                       <div className=''>
                           <ImBin className='w-6 h-6 text-red-600'></ImBin>
                       </div>
               </td>
       </tr>)
     }
      
            


    </tbody>
    
    
  </table>
</div>
   </div>
  )
}

export default Users