import React, { useState } from 'react'
import MenuList from './MenuList';
import { MdOutlineArrowDownward , MdArrowUpward } from "react-icons/md";
import "./style.css";
function menuItem({ item }) {

  const [dispCurChild, setDispCurChild] = useState({});
  function handleToggleChange(curLabel) {
    setDispCurChild({
      ...dispCurChild, [curLabel]: !dispCurChild[curLabel]
    })
  }
  console.log(dispCurChild);
  return (
    <li >
      <div className='item-container'>

        <p>{item.label}</p>
        
          {
            item && item.children && item.children.length ? <span onClick={() => handleToggleChange(item.label)}>
              {
                dispCurChild[item.label]?<MdArrowUpward  />:<MdOutlineArrowDownward  />
              } </span> : null
          }
        
      </div>
          {
            item && item.children &&  item.children.length>0 && dispCurChild[item.label] ? <MenuList list={item.children} /> : null
          }

    </li>
  )
}

export default menuItem;