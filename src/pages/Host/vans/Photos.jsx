
import React from "react"
import { useOutletContext } from "react-router-dom"


export default function Photos(){
    const {van} = useOutletContext()

    return(
        <div className=" w-24 mt-8">
            <img src={van.imageUrl} className=" rounded-md" alt="van" />
        </div>
    )
}