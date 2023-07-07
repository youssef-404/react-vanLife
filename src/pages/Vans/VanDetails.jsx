import { Link, useLocation, useParams } from "react-router-dom"
import React from "react"
import {BiArrowBack} from "react-icons/bi"

export default function VanDetails(){
    const [van,setVan] =React.useState({})
    const location = useLocation()
    const id =useParams().id
    let btnColor;

    
  
    React.useEffect(()=>{
          
        async function getVan(){
            const res = await fetch(`/api/vans/${id}`)
            const data = await res.json()

            setVan(data.vans)
        }
        getVan()

    },[id])
    
    if(van.type==="simple"){
        btnColor="bg-[#E17654]"
    }else if(van.type==="rugged"){
        btnColor="bg-[#115E59]"
    }else{
        btnColor="bg-[#161616]"
    }

    const search =location.state?.search || "";

    const wordSearch = search.length>1 ? van.type : "all"
    


    
    return(
        <div className="m-8">
            <Link className="mb-8 flex items-center hover:underline"
            to={`..${search}`}
            relative="path"
            >
                <BiArrowBack className=" text-gray-500" />
                <p className="ml-1">Back to {wordSearch} vans</p>
            </Link>
            
            <div className="flex justify-center items-center flex-col md:flex-row">
                <div className=" max-w-md mb-8">
                    <img src={van.imageUrl} className=" rounded-md" alt="van" />
                </div>

                <div className="max-w-md md:px-8 md:flex md:flex-col md:justify-center">
                    <div className={`${btnColor} mb-4 capitalize w-fit px-4 py-1 cursor-pointer text-base font-semibold rounded-md text-white`}>
                        {van.type}
                    </div>
                    <h1 className="font-bold text-4xl">
                        {van.name}</h1>
                    <p className="font-semibold text-base my-1">
                        ${van.price}
                        <span className="font-medium text-xs text-[#161616]">
                            /day</span>
                    </p>
                    <p className="font-medium text-base text-justify my-2">
                        {van.description}
                    </p>

                    <Link to="">
                        <div className="flex justify-center items-center py-2 cursor-pointer text-lg hover:bg-orange-500/90 font-extrabold bg-orange-400 rounded-md text-white ">
                            Rent this van
                        </div>
                    </Link>

                </div>

            </div>

         
        </div>
    )
}