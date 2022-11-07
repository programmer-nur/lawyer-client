import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AllServices from "../Pages/AllServices";
import Home from "../Pages/Home/Home.jsx";
import Services from "../Pages/Services";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
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
                path:'/allServices',
                element:<AllServices/>
            }
        ]
    }
])

export default router;