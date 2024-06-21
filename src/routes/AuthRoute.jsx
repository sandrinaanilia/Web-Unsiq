import {Navigate, Outlet} from "react-router-dom";

const AuthRoute = ({isLogin}) =>{
    return isLogin ? <Outlet/> : <Navigate to="/auth-form" replace/>
}

export default AuthRoute