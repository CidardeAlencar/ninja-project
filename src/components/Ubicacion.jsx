import React from 'react'
import '../Style/Ubicacion.css'
import ubi from '../assets/ubica.jpg'

function Ubicacion() {
  return (
    <span className='cont-ubicacion'>
        <img src={ubi} alt="" />
        <br />
        <span className='at'>ENVIO AL INSTANTE!!!</span>
    </span>
  )
}

export {Ubicacion}