import { useState } from "react"

export default function VisualBalance({price, ratio}) {

    const [bgColor, setBgColor] = useState("valid")

    if(price < 400000){
        if(ratio < 30){
            setBgColor("invalid")
        }
    }

    return (
        <div className={`visualBalance ${bgColor}`}></div>
    )
}