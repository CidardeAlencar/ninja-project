import "../Style/Prod2.css"
// import img1 from "../Images/chalAcc/im3.jpg"
import React from 'react'

function Prod2(props) {
  const precio = props.precio
  const nombre = props.nombre
  const img = props.img
  return (
    <div className="prod2">
        <img src={img} alt="" />
        <div className="bu">
          <div className="Prod21">
              <span>Precio</span>
              <span>Nombre Producto</span>
          </div>
          <div className="Prod22">
              <span>{`Bs.- ${precio}`}</span>
              <span>{nombre}</span>
          </div>
        </div> 
    </div>
  )
}

export {Prod2}