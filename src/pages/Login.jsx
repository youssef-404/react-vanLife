
import React from "react"
import { useLocation ,useNavigate } from "react-router-dom"
import {loginUser} from "../api"

export default function Login(){
    const [loginFormData,setLoginFormData] = React.useState({
        email:"",
        password:""
    })
    const [status,setStatus] = React.useState("idle")
    const [error,setError] = React.useState(null)

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from || "/host"
    
    function handleSubmit(e){
        setStatus("submitting")
        setError(null)
        e.preventDefault()
        loginUser(loginFormData)
            .then(data => {
                setError(null)
                localStorage.setItem("loggedin",true)
                navigate(from,{replace:true})
            })
            .catch(err => setError(err))
            .finally(()=>setStatus("idle"))
        
    }

    function handleChange(e){
        const {name,value} =e.target
        setLoginFormData(prev =>(
            {
                ...prev,
                [name]:value
            }
        ))
    }

    


    return(
        <div className="flex flex-col mt-16 md:items-center mx-4">
            {location.state?.message && <h1 className="text-red-600 text-center mb-4">{location.state.message}</h1>}
            <h1 className="text-2xl font-semibold mb-8 text-center">Sign in to your account</h1>
            {error?.message && <h1 className="text-red-600 text-center mb-4">{error.message}</h1>}
            <form className="flex flex-col md:w-1/3">
                <input 
                    className="p-2 mb-4 ring-1 ring-zinc-600/30 rounded-sm"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    onChange={handleChange}
                    value={loginFormData.email}

                />
                <input
                    className="p-2 ring-1  ring-zinc-600/30 rounded-sm"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={loginFormData.password}
                />
                <button className=" mt-8  hover:bg-orange-500/90 py-2 px-12  font-semibold bg-orange-400 rounded-md text-white "
                    onClick={handleSubmit}
                    disabled={status==="submitting"}
                >{status==="submitting" ? "Logging in ...." :"Log in"}</button>
            </form>
        </div>
    )
}