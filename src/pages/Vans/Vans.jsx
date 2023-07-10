import React from "react"
import Card from "../../component/Card"
import { useSearchParams } from "react-router-dom"
import { getVans } from "../../api"

export default function Vans(){

    const [searchParams,setSearchParams] = useSearchParams()
    const [vans,setVans] = React.useState([])
    const [loading,setLoading] = React.useState(false)
    const [error,setError] = React.useState(null)

    const typeFilter = searchParams.get("type")

    React.useEffect(()=>{
        async function loadVans(){
            setLoading(true)
            try{
                const data = await getVans()
                setVans(data)
            }catch(err){
                setError(err)
            }finally{
                setLoading(false)
            }
        }
        loadVans()
    },[])

   

    const filteredData =typeFilter ? vans.filter((van)=>van.type===typeFilter):vans


    const vansElement =filteredData.map((van)=>{
        return(
            <Card key={van.id} {...van} />
        )
    })

    if(error){
        return <h1 className="text-2xl mt-8 text-center text-red-700">There was an error: {error.message}</h1>
    }

    return (
        <div className="flex flex-col items-center md:items-start mx-4 md:mx-16 my-8">
            <h1 className="mb-8 font-bold text-2xl text-center md:text-left md:text-4xl">Explore our van options</h1>

            <div className="flex gap-4 mb-8 items-center">
                <button className={`${typeFilter==='simple'? 'bg-[#E17654] text-white':"bg-[#FFEAD0] text-[#4D4D4D]"} hover:bg-[#E17654] capitalize w-fit px-4 py-1 cursor-pointer text-base font-semibold rounded-md hover:text-white`}
                onClick={()=>setSearchParams({type:'simple'})}>
                    simple
                </button>
                <button className={`${typeFilter==='rugged'?'bg-[#115E59] text-white':'bg-[#FFEAD0] text-[#4D4D4D]'} hover:bg-[#115E59] capitalize w-fit px-4 py-1 cursor-pointer text-base font-semibold rounded-md hover:text-white`}
                onClick={()=>setSearchParams({type:'rugged'})}
                >
                    rugged
                </button>
                <button className={`${typeFilter==='luxury'?'bg-[#161616] text-white':'bg-[#FFEAD0] text-[#4D4D4D]'} hover:bg-[#161616] capitalize w-fit px-4 py-1 cursor-pointer text-base font-semibold rounded-md hover:text-white`}
                onClick={()=>setSearchParams({type:'luxury'})}
                >
                    luxury
                </button>
                

                {
                    typeFilter && 
                        (
                        
                        <button className="hover:underline"
                            onClick={()=>setSearchParams({})}
                        >
                            Clear filters
                        </button>
                    
                        )
                }

            </div>

            <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                {
                    !loading ? vansElement :
                    "Loading ..."
                }
            </div>
        </div>
    )
}