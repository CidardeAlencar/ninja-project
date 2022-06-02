import "../Style/Prod1.css"
import { Prod2 } from './Prod2'
import logo from "../Images/logo.jpg"
import React from 'react'


function Prod1(props) {
  const img = props.img
  const precio = props.precio
  const nombre = props.nombre
  const category = props.category
  return (
    <div className='Prod1'>
        <div className="top">
          <div className="Prod11">
            <img src={logo} alt="" />
          </div>
          <div className="Prod12"> 
              <span></span>                
          </div>
          <div className="Ped">
            <span>{category}</span>  
          </div>
        </div>

        <Prod2 img = {img} precio = {precio} nombre = {nombre}/>
    </div>
  )
}

export {Prod1} 