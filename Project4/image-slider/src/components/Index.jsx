import { useEffect, useState } from "react";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs";
import "./style.css";


export default function Index({url='',page=1,limit=5}){
    let [images,setImages] = useState([]);
    let [error,setError]=useState(null);
    let [curSlide,setCurSlide] = useState(0);

    async function fetchImages(url){
        try{
            
            let resp = await fetch(`${url}?page=${page}&limit=${limit}`);
            let jsonRes = await resp.json();
            if(jsonRes){
                setImages([...jsonRes]);
                console.log(images);
            }

        }
        catch(er){
            setError(er);
        }
    } 
    // if(loading){
    //     return <div>Loading,Please Wait!</div>
    // }
    // if(error!==null){
    //     return <div>Error Occured</div>
    // }
    
    useEffect(()=>{
        if(url!==''){
            fetchImages(url);
        }
    },[page,limit]);

    let handlePrev = ()=>{
        setCurSlide(curSlide===0?images.length-1:curSlide-1);
        
    }
    let handleNext = ()=>{
        setCurSlide(curSlide===images.length-1?0:curSlide+1);
        
    }
    return(
        <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrev} className="arrow arrow-left"/>
            {
                images && images.length?
                images.map((item,index)=><img src={item.download_url} key={item.id} className={curSlide===index?"current-image":"current-image hide-image"} alt={item.download_url}/> ) :null
            }
            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>

            <span className="circle-indicators">
            {
                images&&images.length? images.map((_,index)=><button key={index} className={curSlide===index?"current-indicator":"current-indicator hide-indicator"} onClick={()=>setCurSlide(index)}></button>) :null
            }
            </span>
        </div>
    )
}