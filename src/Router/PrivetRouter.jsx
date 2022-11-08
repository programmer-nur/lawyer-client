import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { MyContext } from "../Context/AuthContext";

const PrivetRouter = ({children}) => {
   const {user,loading} = useContext(MyContext)
   const location = useLocation()
   if(loading){
    return <div className="flex items-center justify-center space-x-2">
	<div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
	<div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
	<div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
</div>
   }
   if(user){
    return children;
   }

    return <Navigate state={{from: location}} replace/>
}
export default PrivetRouter;