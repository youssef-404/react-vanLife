import { Outlet,Navigate, useLocation } from "react-router-dom"

export default function AuthRequired(){
    const isLoggednIn = localStorage.getItem("loggedin")
    const location = useLocation()
    if(!isLoggednIn){
        return <Navigate 
                    to="/login" 
                    state={{message:"You sould login first.",
                    from:location.pathname}} 
                    replace
                />
    }

    return <Outlet />
}