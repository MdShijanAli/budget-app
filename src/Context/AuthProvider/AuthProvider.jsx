import React, { createContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Components/ErrorPage/Loading';
export const AuthContext = createContext();




const AuthProvider = ({ children }) => {
   

    const [loading, setLoading] = useState(false);

    
    const { data: users = [], isLoading} = useQuery ({
      queryKey: ['users'],
      queryFn: async () => {
          try {
              const res = await fetch('http://localhost:5000/users');
              const data = await res.json();
              return data;
          }
          catch (error) {
              console.log(error);
          }
      }
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    
    // console.log(users)


    const UserEmail = localStorage.getItem("UserEmail");
    // console.log(UserEmail)

   

    const UserInfo = users.find(user => user.email === UserEmail);
    // console.log(UserInfo)

   






    const authInfo = {
        UserInfo,
        users,
        loading,
        setLoading

        


    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;