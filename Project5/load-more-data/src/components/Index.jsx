import { useEffect, useState } from "react";
import {v4 as uuid} from "uuid";
import "./style.css"
export default function Index({ limit=5 }) {
    let url = 'https://dummyjson.com/products?';
    let [data, setData] = useState([]);
    let [count, setCount] = useState(0);
    let [loading, setLoading] = useState(false);
    let [disableBtn,setDisableBtn] = useState(false);
    async function fetchdata(url) {
        try {
            setLoading(true);
            let res = await fetch(`${url}limit=${limit}&skip=${count === 0 ? 0 : count * limit}`);

            let jsonRes = await res.json();
            if (jsonRes && jsonRes.products.length && jsonRes.products) {
                setLoading(false);
                setData((prevData) =>
                    [...prevData,...jsonRes.products]
                );
            }


        }
        catch (er) {
            setLoading(false);
            console.log("an error occured");
            console.log(er);
        }
    }

    useEffect(() => {
        fetchdata(url);
    }, [count])
    useEffect(()=>{
        data.length>=130?setDisableBtn(true):setDisableBtn(false);
    },[data])
    return (
        <div className="container">
            {
           loading?
                <div>Loading , please wait</div>:null
            }
            {data&&data.length?<h1 style={{textAlign:"center" , color:"orange"}}>Welcome to Goodo's Store</h1>:null}
            <div className="product-container">
                
                {
                    data && data.length ?
                        data.map((prod) => (<div className="product" key={uuid()}>
                            <img src={prod.thumbnail} alt={prod.title} />
                            <div className="title">

                            <p >{prod.title}</p>
                            <p>Price : <b>{prod.price}$</b></p>
                            <p>Rating : <b>{prod.rating}</b> </p>
                            <p>{prod.returnPolicy} </p>
                            </div>
                        </div>)) : null
                }
            </div>
            <div className={count*limit<=100?"button-container":"disable"}>
                <button disabled={disableBtn} onClick={() => setCount(count => count + 1)}>Load More</button>
            </div>
            {
                disableBtn?<p><b>Cannot load more items,As you've reached your limit!</b></p>:null
            }
        </div>
    )
}