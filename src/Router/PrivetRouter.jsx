import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { MyContext } from "../Context/AuthContext";

const PrivetRouter = ({children}) => {
   const {user,loading} = useContext(MyContext)
   const location = useLocation()
   if(loading){
    return <div className="relative">
        <div className="flex flex-col m-8 rounded shadow-md mx-auto w-full sm:w-80 animate-pulse h-96">
	<div className="h-48 rounded-t bg-gray-700"></div>
	<div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-900">
		<div className="w-full h-6 rounded bg-gray-700"></div>
		<div className="w-full h-6 rounded bg-gray-700"></div>
		<div className="w-3/4 h-6 rounded bg-gray-700"></div>
		<div className="w-3/4 h-6 rounded bg-gray-700"></div>
	</div>
</div>
    </div>
   }
   if(user && user?.uid){
    return children;
   }

    return <Navigate to='/login' state={{from: location}} replace/>
}
export default PrivetRouter;