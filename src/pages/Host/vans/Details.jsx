import React from "react"
import { useOutletContext } from "react-router-dom"


export default function Details(){
    const {van} = useOutletContext()
 
    return(
        <div className="flex mt-4 flex-col gap-3">
            <p className="text-sm">
                <span className="font-bold text-base">Name:</span> {van.name}
            </p>

            <p className="text-sm">
                <span className="font-bold text-base">Category:</span> {van.type}
            </p>

            <p className="text-justify text-sm">
                <span className="font-bold text-base">Description:</span> {van.description}
            </p>

            <p className="text-sm">
                <span className="font-bold text-base">Visibility:</span> Public
            </p>
        </div>
        
    )
}