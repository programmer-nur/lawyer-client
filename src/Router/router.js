import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AllServices from "../Pages/AllServices";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home/Home.jsx";
import Services from "../Pages/Services";
import Review from "../Pages/Review";
import About from "../Pages/About";
import ServiceDetails from "../Pages/ServiceDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import TotalReview from "../Pages/TotalReview";
import PrivetRouter from "./PrivetRouter";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/services',
                element:<Services/>,
                loader:()=>fetch(`http://localhost:5000/services`)
            },
            {
                path:'/blog',
                element:<Blog/>
            },
            {
                path:'/service/:id',
                loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`),
                element:<ServiceDetails/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/review',
                loader:()=>fetch('http://localhost:5000/review'),
                element:<PrivetRouter><TotalReview/></PrivetRouter>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/allServices',
                element:<AllServices/>
            }
        ]
    }
])

export default router;