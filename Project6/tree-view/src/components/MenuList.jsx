import React from 'react'
import MenuItem from './MenuItem'
import "./style.css"
export default function MenuList({list=[]}) {
  return (
    <ul className="menuListContainer">
        {
            list&&list.length? list.map(listItem=> <MenuItem item={listItem}/>)  :null
        }
         
    </ul>
  )
}

