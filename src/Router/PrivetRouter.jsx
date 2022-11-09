import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { MyContext } from "../Context/AuthContext";

const PrivetRouter = ({children}) => {
   const {user,loading} = useContext(MyContext)
   const location = useLocation()
   if(loading){
    return <div className="relative">
        <div className="flex items-center absolute top-[50%] left-[50%] justify-center space-x-2">
	<div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
	<div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
	<div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
</div>
    </div>
   }
   if(user && user?.uid){
    return children;
   }

    return <Navigate to='/login' state={{from: location}} replace/>
}
export default PrivetRouter;