import React from 'react'
import { ImBin } from 'react-icons/im';

const Users = () => {
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
      {/* row 1 */}
      <tr className='hover'>
        
             <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-circle w-12 h-12">
                              <img src="data:image/jpeg;base64,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" alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                        
                        </div>
              </td>
              <td>
                        <div>
                        <div className="font-bold">MD Shijan Ali</div>
                        <div className="badge badge-ghost badge-sm">shijan135@gmail.com</div>
                      </div>
              </td>
              <td>
                Bangladesh
              </td>
              <td>
                +8801571261165
              </td>
              <td>Admin</td>
              <td>
                      <div className=''>
                          <ImBin className='w-6 h-6 text-red-600'></ImBin>
                      </div>
              </td>
      </tr>
      <tr className='hover'>
        
             <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-circle w-12 h-12">
                              <img src="data:image/jpeg;base64,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" />
                            </div>
                          </div>
                        
                        </div>
              </td>
              <td>
                        <div>
                        <div className="font-bold">MD Shijan Ali</div>
                        <div className="badge badge-ghost badge-sm">shijan135@gmail.com</div>
                      </div>
              </td>
              <td>
                Bangladesh
              </td>
              <td>
                +8801571261165
              </td>
              <td>Admin</td>
              <td>
                      <div className=''>
                          <ImBin className='w-6 h-6 text-red-600'></ImBin>
                      </div>
              </td>
      </tr>
      <tr className='hover'>
        
             <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-circle w-12 h-12">
                              <img src="https://pps.whatsapp.net/v/t61.24694-24/187692786_536470790851441_3895154402583461474_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRUYjNANCLjDjc1jLRzK0MbXvkK8Z7HwyiHZdiLuq9jWw&oe=64E0D705" />
                            </div>
                          </div>
                        
                        </div>
              </td>
              <td>
                        <div>
                        <div className="font-bold">Ryan Ragland</div>
                        <div className="badge badge-ghost badge-sm">ryan@gmail.com</div>
                      </div>
              </td>
              <td>
                USA
              </td>
              <td>
                +8801571261165
              </td>
              <td>Admin</td>
              <td>
                      <div className=''>
                          <ImBin className='w-6 h-6 text-red-600'></ImBin>
                      </div>
              </td>
      </tr>
      <tr className='hover'>
        
             <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-circle w-12 h-12">
                              <img src="data:image/jpeg;base64,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" />
                            </div>
                          </div>
                        
                        </div>
              </td>
              <td>
                        <div>
                        <div className="font-bold">MD Shijan Ali</div>
                        <div className="badge badge-ghost badge-sm">shijan135@gmail.com</div>
                      </div>
              </td>
              <td>
                Bangladesh
              </td>
              <td>
                +8801571261165
              </td>
              <td>Admin</td>
              <td>
                      <div className=''>
                          <ImBin className='w-6 h-6 text-red-600'></ImBin>
                      </div>
              </td>
      </tr>
      <tr className='hover'>
        
             <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-circle w-12 h-12">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7LwBD2DKlnGIkupTnoUcYKlymGPY392TE2A&usqp=CAU" />
                            </div>
                          </div>
                        
                        </div>
              </td>
              <td>
                        <div>
                        <div className="font-bold">MD Shijan Ali</div>
                        <div className="badge badge-ghost badge-sm">shijan135@gmail.com</div>
                      </div>
              </td>
              <td>
                Bangladesh
              </td>
              <td>
                +8801571261165
              </td>
              <td>Admin</td>

              <td>
                      <div className=''>
                          <ImBin className='w-6 h-6 text-red-600'></ImBin>
                      </div>
              </td>
      </tr>
      
            


    </tbody>
    
    
  </table>
</div>
   </div>
  )
}

export default Users