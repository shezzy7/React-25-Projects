import React, { useState } from 'react'
import Model from './Model'
import "./model.css"
function ModelTest() {
    const [popupModel,setPopupModel] = useState(false);
    let handlePopup = ()=>{
        setPopupModel(!popupModel);
    }
  return (
    <div className='model-test-container'>
        <button onClick={handlePopup} className={`${popupModel?'hide':'show'}`}>Popup Model</button>
        {
            popupModel?<Model handlePopup={handlePopup}/>:null
        }
        
    </div>
  )
}

export default ModelTest