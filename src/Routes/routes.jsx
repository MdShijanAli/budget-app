import { createBrowserRouter } from "react-router-dom";



import ErrorPage from "../Components/ErrorPage/ErrorPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Main from "../Layout/Main";
import HomePage from "../Pages/HomePage/HomePage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import ResetPage from "../Pages/ResetPage/ResetPage";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddIncome from "../Pages/Dashboard/AddIncome";
import AddExpense from "../Pages/Dashboard/AddExpense";
import Settings from "../Pages/Dashboard/Settings";
import Users from "../Pages/Dashboard/Users";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

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

    {
        path: '/dashboard',
        element: <PrivetRoute><DashboardLayout /></PrivetRoute>,
        children: [
            {
                path: '/dashboard',
                element: <PrivetRoute><Dashboard/></PrivetRoute>
            },
            {
                path: 'add-income',
                element: <PrivetRoute><AddIncome/></PrivetRoute>
            },
            {
                path: 'add-expense',
                element: <PrivetRoute><AddExpense/></PrivetRoute>
            },
            {
                path: 'settings',
                element: <PrivetRoute><Settings/></PrivetRoute>
            },
            {
                path: 'users',
                element: <PrivetRoute><Users/></PrivetRoute>
            }
        ]
    }
    

]) 