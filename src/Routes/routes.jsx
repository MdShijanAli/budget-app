import { createBrowserRouter } from "react-router-dom";



import ErrorPage from "../Components/ErrorPage/ErrorPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Main from "../Layout/Main";
import HomePage from "../Pages/HomePage/HomePage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import ResetPage from "../Pages/ResetPage/ResetPage";

export const routes = createBrowserRouter([



    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/login',
                element: <LoginPage />
            },

            {
                path: '/register',
                element: <RegisterPage/>
            },
            {
                path: '/reset',
                element: <ResetPage/>

            },
            {
                path: '*',
                element: <ErrorPage/>
            },


        ]
    },

    

]) 