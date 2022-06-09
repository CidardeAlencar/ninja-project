import React from 'react'
import {cardList} from '../cardAPI/index1.js'
import {cardList_2} from '../cardAPI/index2.js'
import {cardList_3} from '../cardAPI/index3.js'
import {cardList_4} from '../cardAPI/index4.js'
import {cardList_5} from '../cardAPI/index5.js'
import {cardList_6} from '../cardAPI/index6.js'
import { Producto } from './Producto.jsx'
function PaginaMaster() {
  return (
    <div className='pag'>
        <Producto list = {cardList}/>
        <Producto list = {cardList_2}/>
        <Producto list = {cardList_3}/>
        <Producto list = {cardList_4}/>
        <Producto list = {cardList_5}/>
        <Producto list = {cardList_6}/>
    </div>
  )
}

export {PaginaMaster} 