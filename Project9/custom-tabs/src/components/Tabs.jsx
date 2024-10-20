import React, { useState } from 'react'
import "./style.css"
function Tabs({tabsContent,onChange}) {
  let [currentTab,setCurrentTab] = useState(0);

  let handleClick = (idx)=>{
    setCurrentTab(idx);
  }
    return (
    <div className='wrapper'>
        <div className="heading">
            {
                tabsContent.map((ele,idx)=><div key={ele.label}>
                    <span className={`label ${currentTab==idx?"active":""}`}  type="button" onClick={()=>handleClick(idx)}>
                        {ele.label}
                    </span>
                </div>)
            }
        </div>
        <div className="content" style={{color:"red"}}>
            {
                tabsContent[currentTab] && tabsContent[currentTab].content
            }
        </div>
    </div>
  )
}

export default Tabs;