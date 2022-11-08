import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AllServices from "../Pages/AllServices";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home/Home.jsx";
import Services from "../Pages/Services";
import Review from "../Pages/Review";
import About from "../Pages/About";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
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
                path:'/review',
                element:<Review/>
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