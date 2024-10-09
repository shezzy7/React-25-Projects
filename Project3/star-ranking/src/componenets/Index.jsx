import { useState } from "react";
import {FaStar} from "react-icons/fa";
import "./style.css";
export default function Index({noOfStars=5}){
    let [rating,setRating] = useState(0);
    let [hover,setHover] = useState(0);

    let handleClick = (index)=>{
        setRating(index);
    }
    let handleMouseOver = (index)=>{
        setHover(index);
    }
    let handleMouseLeave = ()=>{
        setHover(rating);
    }
    return(
        <div className="star-ranking">
            {
                [...Array(noOfStars)].map((_,index)=>{
                    index+=1;//making index +1 just to inc index by 1
                    return <FaStar
                    className={index<=(hover||rating)?'active':'inactive'}
                    key={index}
                    onClick={()=>handleClick(index)}
                    onMouseOver={()=>handleMouseOver(index)}
                    onMouseLeave={()=>handleMouseLeave()}
                    /> 
                })
            }
        </div>
    )
}