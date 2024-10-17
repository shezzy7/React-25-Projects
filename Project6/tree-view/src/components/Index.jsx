
import React from 'react'
import MenuList from "./MenuList.jsx";
import "./style.css"

function Index({menus=[]}) {
  return (
    <div className='treeViewContainer'>
       <MenuList list={menus}/>
    </div>
  )
}

export default Index