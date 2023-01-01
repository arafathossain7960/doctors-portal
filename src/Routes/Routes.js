import { createBrowserRouter } from "react-router-dom";
import Appointment from "../Page/Appointment/Appointment";
import Login from "../Page/Authentication/Login";
import Register from "../Page/Authentication/Register";
import DashboardHome from "../Page/Dashboard/DashboradHome/DashboardHome";
import Home from "../Page/HomePage/Home/Home";
import Main from "../Page/Layout/Main";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
{
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/home',
            element:<Home></Home>
        },
        {
            path:'/appointment',
            element:<Appointment></Appointment>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
       {
        path:'/dashboard',
        element: <PrivetRoute>
        <DashboardHome></DashboardHome>
    </PrivetRoute>
       }
       
    ]
}

])