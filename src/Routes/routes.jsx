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
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: 'add-income',
                element: <AddIncome/>
            },
            {
                path: 'add-expense',
                element: <AddExpense/>
            },
            {
                path: 'settings',
                element: <Settings/>
            },
            {
                path: 'users',
                element: <Users/>
            }
        ]
    }
    

]) 