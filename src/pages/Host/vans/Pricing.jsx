import React from "react"

import { useOutletContext } from "react-router-dom"



export default function Pricing(){
    const {van} = useOutletContext()
    return(
        
        <p className="font-semibold text-2xl mt-6">
            ${van.price}
            <span className="font-medium text-xs text-[#161616]">
            /day</span>
        </p>
        
    )
}