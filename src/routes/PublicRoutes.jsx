import {Navigate, Outlet} from "react-router-dom";

const PublicRoute = ({isLogin}) =>{
    return isLogin ?  <Navigate to="/user" replace/>: <Outlet/>
}

export default PublicRoute