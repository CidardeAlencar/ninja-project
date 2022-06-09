import React from 'react'
import {cardList} from '../cardAPI/index.js'
import { Producto } from './Producto.jsx'
function PaginaMaster() {
  return (
    <div className='pag'>
        <Producto list = {cardList}/>
    </div>
  )
}

export {PaginaMaster} 