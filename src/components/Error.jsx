import { Link } from "react-router-dom"
import emptyPlate from "../assets/empty-plate.png"

export default function Error({message, explanation}){
    console.log("called")
    return (
        <div className="not-found-container">
            <img src={emptyPlate} alt="" className="not-found-image" />
            <h1 className="not-found-header">{message ? message : "Oh No!!!!"}</h1>
            <p>{explanation ? explanation : "Something went wrong"}</p>
            <Link to="/">GO Back Home</Link>
        </div>
    )
}