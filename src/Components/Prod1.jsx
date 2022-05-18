import "../Style/Prod1.css"
import { Prod2 } from './Prod2'
import logo from "../Images/logo.jpg"
import React from 'react'


function Prod1() {
  return (
    <div className='Prod1'>
        <div className="top">
          <div className="Prod11">
            <img src={logo} alt="" />
          </div>
          <div className="Prod12"> 
              <span>Ninja</span>  
              
          </div>
          <div className="Ped">
          <span>Mochilas</span>  
          </div>
        </div>

        <Prod2/>
    </div>
  )
}

export {Prod1} 