
import React from "react"
import { Link } from "react-router-dom"
import {getHostVans} from "../../api"

export default function HostVans(){
    const [hostVans,setHostVans]=React.useState([])
    const [loading,setLoading] =React.useState(false)
    const [error,setError] = React.useState(null)


    React.useEffect(()=>{
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans()
                setHostVans(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()

    },[])

    const hostVansElemnt=hostVans.map((hostVan)=>{
        return(
            <Link to={`${hostVan.id}`}  key={hostVan.id}>
                <div className=" items-center p-4 bg-white flex rounded-md">
                    <div className="w-24">
                        <img className=" rounded-md"
                        src={hostVan.imageUrl} alt="host van" />
                    </div>
                    <div className="ml-8">
                        <h1 className="font-semibold md:text-xl mb-2">{hostVan.name}</h1>
                        <p>${hostVan.price}<span className="font-medium text-xs text-[#161616]">/day</span></p>
                    </div>
                </div>
            </Link>
        )
    })


    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return(
        <div className="mx-10 my-4">
            <h1 className="text-2xl text-center md:text-left md:text-4xl mb-8 font-bold">Your listed vans</h1>
            <div className="flex flex-col gap-6">
                {hostVansElemnt}

            </div>
        </div>
        
    )
}