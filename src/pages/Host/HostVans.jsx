
import React from "react"
import { Link } from "react-router-dom"

export default function HostVans(){
    const [hostVans,setHostVans]=React.useState([])

    React.useEffect(()=>{

        async function getHostVans(){
            const res = await fetch("/api/host/vans")
            const data = await res.json()
            setHostVans(data.vans)
        }

        getHostVans()

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

    return(
        <div className="mx-10 my-4">
            <h1 className="text-2xl text-center md:text-left md:text-4xl mb-8 font-bold">Your listed vans</h1>
            <div className="flex flex-col gap-6">
                {hostVansElemnt}

            </div>
        </div>
        
    )
}