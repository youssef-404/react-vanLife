import { Link, useSearchParams } from "react-router-dom"


export default function Card(props){
    const [searchParams] = useSearchParams()

    let btnColor
    if(props.type==="simple"){
        btnColor="bg-[#E17654]"
    }else if(props.type==="rugged"){
        btnColor="bg-[#115E59]"
    }else{
        btnColor="bg-[#161616]"
    }

    

    return(
        <div className="w-60">
            <Link to={props.id} state={{search:`?${searchParams.toString()}`}}>
            <div className="h-60 w-full">
                <img className="w-full h-full rounded-md" alt={props.name} src={props.imageUrl} />
            </div>
            <div className="flex justify-between items-center pt-2">
                <h3 className="font-semibold text-base ">{props.name}</h3>
                <p className="flex flex-col">
                  <span className="font-semibold text-base">${props.price}</span>
                  <span className="font-medium text-xs text-[#161616]">/day</span>
                </p>
            </div>
            <div className={`${btnColor} capitalize w-fit px-4 py-1 cursor-pointer text-base font-semibold rounded-md text-white`}>
                {props.type}
            </div>
            </Link>
        </div>
    )
}