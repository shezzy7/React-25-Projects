import "./style.css";
import React, { useEffect, useState } from 'react'

function Index({ url }) {

    let [data, setData] = useState([]);
    let [count, setCount] = useState(0);
    let [scrollControll, setScrollControll] = useState(0);
    async function fetchData() {
        try {
            let response = await fetch(`${url}&skip=${10 * count}`);
            let jsonRes = await response.json();
            setData(prevData=>[...prevData,...jsonRes.products]);

        }
        catch (e) {
            console.log("error");
        }
    }

    function handleScroll() {
        let howMuchScroll = document.body.scrollTop || document.documentElement.scrollTop; //how much you have scrolled from top to bottom.First section works in some devices and may not work in some some devices.So the functionality of both the methods is same but one may not work in any device so we are using both if any of them returns value then it will be taken as value of how much we have scrolled.
        let scHeight = document.documentElement.scrollHeight;// Get the total height of the document's content
        let clHeight = document.documentElement.clientHeight; // Get the height of the visible part of the document (viewport)
        let height = scHeight - clHeight;
        setScrollControll((howMuchScroll / height) * 100);

    }
    useEffect(() => {
        fetchData();
    }, [count])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => { })
        }
    }, [])
    return (
        <div className="scroll-indicator">
            <div className="top-container">

                <h2>Custome Scroll Indicator</h2>
                <div className="scroll-progress-tracking-container">
                    <div className="current-progress-bar" style={{ width: `${scrollControll}%` }}>

                    </div>
                </div>
            </div>
            <div className="container">
                {
                    data && data.length > 0 ? data.map(ele => <p> {ele.title} <img src={ele.thumbnail} /> <br /> <p>{ele.price}$</p> </p> ) : null
                }
            </div>
            <button onClick={() => setCount((count) => count + 1)}>Click</button>
        </div>
    )
}

export default Index