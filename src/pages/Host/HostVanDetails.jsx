import React from "react"
import { NavLink,Link ,useParams, Outlet } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi"


export default function HostVanDetails(){
    const [van,setVan] =React.useState({})
    const id =useParams().id
    let btnColor
  
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
        
        return(
            <div className="m-8">
                <Link className="mb-8 flex items-center hover:underline"
                to=".."
                relative="path"
                >
                    <BiArrowBack className=" text-gray-500" />
                    <p className="ml-1">Back to all vans</p>
                </Link>
                
                <div className="p-6 bg-white gap-4">
                    <div className="flex items-center gap-4">

                        <div className="w-36">
                            <img src={van.imageUrl} alt="van" />
                        </div>

                        <div className="">
                            <div className={`${btnColor} text-xs mb-4 capitalize w-fit px-2 md:px-4 py-1 cursor-pointer md:text-base font-semibold rounded-md text-white`}>
                                {van.type}
                            </div>
                            <h1 className="font-bold text-lg md:text-2xl">
                                {van.name}</h1>
                            <p className="font-semibold text-base my-1">
                                ${van.price}
                                <span className="font-medium text-xs text-[#161616]">
                                    /day</span>
                            </p>
            
                        </div>
                    </div>

                    <div className="flex gap-6 mt-8">
                        <p className="text-gray-500 text-xs md:text-base font-semibold  capitalize hover:underline hover:text-black">
                            <NavLink 
                            end
                            className={({isActive})=> isActive ? "text-[#161616] underline font-bold" :""} 
                            to=".">Details</NavLink>  
                        </p>

                        <p className='text-gray-500 font-semibold text-xs md:text-base capitalize hover:underline hover:text-black'>
                            <NavLink 
                            className={({isActive})=> isActive ? "text-[#161616] underline font-bold" :""} 
                            to="pricing">Pricing</NavLink>
                        </p>

                        <p className='text-gray-500 font-semibold text-xs md:text-base capitalize hover:underline hover:text-black'>
                            <NavLink 
                            className={({isActive})=> isActive ? "text-[#161616] underline font-bold" :""} 
                            to="photos">Photos</NavLink>
                        </p>

                    
                    </div>

                    <Outlet context={{van}} />                    

                </div>            
            </div>
    )
}

