import React from "react";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs"
import { getHostVans } from "../../api";


export default function Dashboard(){
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
            <div  key={hostVan.id}>
                <div className=" items-center p-4 bg-white flex rounded-md">
                    <div className="w-24">
                        <img className=" rounded-md"
                        src={hostVan.imageUrl} alt="host van" />
                    </div>
                    <div className="ml-8">
                        <h1 className="font-semibold md:text-xl mb-2">{hostVan.name}</h1>
                        <p>${hostVan.price}<span className="font-medium text-xs text-[#161616]">/day</span></p>
                    </div>
                    <div className="ml-auto ">
                        <Link to={`vans/${hostVan.id}`}>
                            <p className=" ml-auto font-semibold text-[#4D4D4D] text-sm">View</p>
                        </Link>
                    </div>
                </div>
            </div>
            )
        })

  
        if (loading) {
            return <h1>Loading...</h1>
        }
    
        if (error) {
            return <h1>There was an error: {error.message}</h1>
        }
    
    return(
        <>
            <div className="bg-[#FFEAD0] p-8">
                <h1 className="text-3xl font-bold">Welocom!</h1>
                <div className="flex items-center text-[#4D4D4D]"> 
                    <p className="mr-auto  my-4">
                        Income last <span className="underline font-semibold">
                            30 days</span>
                    </p>
                    <p className=" font-semibold text-sm">
                        <Link to="income">Details</Link>
                    </p>
                </div>
                    <h1 className="font-bold text-4xl">$2,260</h1>
            </div>

            <div className="p-8 flex bg-[#FFDDB2] items-center">
                <p className="text-xl font-bold mr-4">
                    Review score
                </p>
                <BsStarFill className="mr-1 text-orange-500"/>
                <p className="text-[#4D4D4D]">
                    <span className="text-black font-semibold">5.0</span>/5
                </p>
                <p className=" ml-auto font-semibold text-[#4D4D4D] text-sm">
                        <Link to="reviews">Details</Link>
                </p>
            </div>

            <div className="p-8">
                <div className="flex mb-8">
                    <h1 className="text-xl font-bold">Your listed vans</h1>
                    <p className=" ml-auto font-semibold text-[#4D4D4D] text-sm">
                        <Link to="vans">View all</Link>
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    {hostVansElemnt}
                </div>
            </div>
        </>
    )
}