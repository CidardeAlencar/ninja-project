import "../Style/Prod2.css"
import img1 from "../Images/chalAcc/im3.jpg"
import React from 'react'

function Prod2() {

  return (
    <div className="prod2">
        <img src={img1} alt="" />
        <div className="bu">
          <div className="Prod21">
              <span>Precio</span>
              <span>Nombre Producto</span>
          </div>
          <div className="Prod22">
              <span>Bs 50.00</span>
              <span>Chaleco</span>
          </div>
        </div>
        
        
    </div>
  )
}

export {Prod2}