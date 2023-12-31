import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const RegisterPage = () => {
    const { createUser,users, loading, setLoading, updateUserProfile, } = useContext(AuthContext);



    const [showpass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const [error, setError] = useState('');
    const [wrongPass, setWrongPass] = useState('');
    const [usererr, setUsererr] = useState('');
    const [userPassErr, setUserPasserr] = useState('');




    

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const confirm = form.confirm.value;
        const password = form.password.value;
        const image = form.image.files[0];


        // console.log(name, email, password, confirm, photoURL);

        

        if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError('Please add a special carecter')
            return;

        }



        if (password !== confirm) {
            setWrongPass('PassWord did not match');
            return;
        }

        if (users.some(user => user.email === email)) {
            setUsererr('This email already has an account, Please Login');
            return;
        }
        /* 
        if (users.some(user => user.password === password)) {
            setUserPasserr('Please Change this Password. It is not safe.');
            return;
        } */



        const formData = new FormData()
        formData.append('image', image)

        const url = 'https://api.imgbb.com/1/upload?key=c993754e5e7bdf8ca9412defbbd79642'
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {

                if (imageData.success) {

                    const userInfo = {
                        displayName: name,
                        photoURL: imageData.data.url,
                        email,
                        role:"User"


                    }
                    console.log(userInfo)
                    // save doctor information to the database

                    fetch('https://budget-app-server.vercel.app/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(userInfo)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                toast.success(`${name} is Added Successfully`);
                                
                            }
                            console.log(result)
                        })
                }





                createUser(email, password)
                    .then(() => {
                        // setAuthToken(result.user)
                        setError('');
                        window.location.href = "/dashboard"
                        toast.success('Account Creation SUccess')
                        
                        
                    })
                    .catch(error => {
                        console.error('create user account error', error)
                        setError(error.message);
                        setLoading(false)
                    })

            })
            .catch(err => {
                toast.error(err.message)
            })


        // console.log(name, check, email, image, password, confirm)




    }




    return (
        <div className='bg-indigo-50'>
            <div className=" w-3/4 mx-auto">
                <form onSubmit={handleSubmit}  className="px-10 md:py-12 py-9 md:flex items-center justify-center">

                    <div className="bg-white shadow-lg rounded xl:w-1/2 w-2/3 w-full lg:px-10 sm:px-6 sm:py-10 px-10 py-6 mb-20 md:mb-0">
                        <p tabIndex={0} className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
                            Create an account
                        </p>
                        <p tabIndex={0} className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
                            Already have an Account?{" "}
                            <Link to='/login' className="hover:text-[#00b22d] focus:text-[#00b22d] focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-[#00b22d] cursor-pointer">
                                {" "}
                                Sign In here
                            </Link>
                        </p>
                       


                        <div className="w-full flex items-center justify-between py-5">
                            <hr className="w-full bg-gray-400" />
                            <p className="text-base font-medium leading-4 px-2.5 text-gray-500">OR</p>
                            <hr className="w-full bg-gray-400" />
                        </div>
                        <div className="mt-6 w-full">
                            <label htmlFor="name" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Name{" "}
                            </label>
                            <input

                                name='name' id="name" aria-labelledby="name" type="text" className="block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-[#00b22d] focus:bg-white caret-blue-600 mt-2" placeholder="e.g: Md Shijan Ali " required />
                        </div>
                        <div className="mt-6 w-full">
                            <label htmlFor="image" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Select Image{" "}
                            </label>
                            <input
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                                required
                            />
                        </div>
                        <div className="mt-6 w-full">
                            <label htmlFor="email" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Email{" "}
                            </label>
                            <input

                                name='email' id="email" aria-labelledby="email" type="email" className="block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-[#00b22d] focus:bg-white caret-blue-600 mt-2" placeholder="e.g: john@gmail.com " required />
                        </div>
                        <div className="mt-6 w-full">
                            <label htmlFor="password" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Password{" "}
                            </label>
                            <div className="relative flex items-center justify-center">
                                <input name='password' id="password" placeholder='******'  type={showpass ? "text" : "password"} className="block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-[#00b22d] focus:bg-white caret-blue-600 mt-2" required />
                                <div onClick={() => setShowPass(!showpass)} className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                    <div id="show">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                                                fill="#71717A"
                                            />
                                        </svg>
                                    </div>
                                    <div id="hide" className="hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye-off" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#27272A" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <line x1={3} y1={3} x2={21} y2={21} />
                                            <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                                            <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        <p className='text-lg text-red-700'>  </p>
                        <div className="mt-6 w-full">
                            <label htmlFor="confirm" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Confirm Password{" "}
                            </label>
                            <div className="relative flex items-center justify-center">
                                <input name='confirm' id="confirm" placeholder='******'  type={showConfirmPass ? "text" : "password"} className="block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-[#00b22d] focus:bg-white caret-blue-600 mt-2" required />
                                <div onClick={() => setShowConfirmPass(!showConfirmPass)} className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                    <div id="show">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                                                fill="#71717A"
                                            />
                                        </svg>
                                    </div>
                                    <div id="hide" className="hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye-off" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#27272A" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <line x1={3} y1={3} x2={21} y2={21} />
                                            <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                                            <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='text-red-600'>
                            {error}
                        </div>
                        <div className='text-red-600'>
                            {wrongPass}
                        </div>
                        <div className='text-red-600'>
                            {usererr}
                        </div>
                        <div className='text-red-600'>
                            {userPassErr}
                        </div>



                        <div className="mt-8">
                            
                            <button type='submit' className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#00b22d] border border-transparent rounded-md focus:outline-none hover:bg-[#00b22d] focus:bg-[#00b22d">
                                {
                                    loading? <span className="loading loading-dots loading-sm"></span>: "Create my account"
                               } 
                            </button>
                            
                        </div>
                    </div>
                    <div className="xl:w-1/2 lg:pl-8 md:pl-8 md:w-1/2 w-full mx-auto md:mt-0 mt-6">
                        <div className="">
                            <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="" />
                        </div>
                       
                       
                    </div>
                </form>
            </div>
        </div>
    )
}
export default RegisterPage;
