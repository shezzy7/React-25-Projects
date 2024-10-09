import { useEffect, useState } from "react"

export default function Index() {
    let [color, setColor] = useState("#000000");
    let [typeOfColor, setTypeOfColor] = useState('hex');

    function getRandomVal(length) {
        return Math.floor(Math.random() * length);
    }
    function genHexColor() {
        
            let hex = "#";
            let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
            for (let i = 0; i < 6; i++) {
                hex += arr[getRandomVal(arr.length)];
            }
            setColor(hex);
            console.log(color);
    }
    // rbb
    function genRgbColor() {
        let r = getRandomVal(256);
        let g = getRandomVal(256);
        let b = getRandomVal(256);
        setColor(`rgb(${r},${g},${b})`);
        console.log(color);
    }
    useEffect(() => {
        if (typeOfColor === 'hex') {
            genHexColor();
        }
        else {
            genRgbColor();
        }
    }, [typeOfColor])
    return (
        <div style={{
            backgroundColor: color,
            width: "100vw",
            height: "100vh",
            paddingTop:"10px"
        }}>
            <button onClick={() => typeOfColor=='hex'?genHexColor():setTypeOfColor('hex')}>Generate HEX color</button>
            <button onClick={() => typeOfColor=='rgb'?genRgbColor():setTypeOfColor('rgb')}>Generate RGB color</button>
            <button onClick={
                typeOfColor=='hex'? genHexColor : genRgbColor
            }>Generate Random color</button>

           <div style={{marginTop:"30px" , fontSize:"30px"}}> {
                typeOfColor==='hex'?<div>HEX Color</div>:<div>RGB Color</div>
            }
            </div>
            <h2>{color}</h2>

        </div>
    )
}