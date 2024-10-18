import "./style.css"
import React, { useState } from 'react'
import QRCode from "react-qr-code";
function Index() {
    let [inpVal,setInpVal] = useState('');
    let [qrCode,setQrCode] = useState('');
    function genQrCode(){
        setQrCode(inpVal);
        setInpVal('');
    }
  return (
    <div>
        <h2>QR Code Generator</h2>
        <div>
            <input type="text" placeholder="Enter value here" value = {inpVal} onChange={(e)=>setInpVal(e.target.value)}/>
            <button disabled={inpVal && inpVal.trim()!=''?false:true} onClick={genQrCode}>Generate</button>
        </div>
        <QRCode id="qr-code-value" value={qrCode} size={400} style={{backgroundColor:"#fff"}}/>
    </div>
  )
}

export default Index