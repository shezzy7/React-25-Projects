import React from 'react'
import Index from './components/Index';
import {menus} from "./components/data";
function App() {
  return (
    <Index menus={menus}/>
  )
}

export default App