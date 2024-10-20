import React from 'react'
import Tabs from './Tabs'

const RandomMsg = ()=>{
    return <h1 style={{color:"red"}}>Error</h1>
}
function TabsTest() {
    let tabs = [
        {
            label:"Tab1",
            content:<div>Tab1 content here</div>
        },
        {
            label:"Tab2",
            content:<div>Tab2 content here</div>
        },
        {
            label:"Tab3", 
            content:<RandomMsg />
        }
    ]
  return (
      <div>
        <Tabs tabsContent={tabs} onChange={4}/>
      </div>
)
}

export default TabsTest