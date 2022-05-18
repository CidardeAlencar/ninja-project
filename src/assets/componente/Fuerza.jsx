import React from 'react'
import '../estilos/Fuerza.css'
import armada from '../ARMADA.png'
import ejercito from '../EjercitoEB.png'
import emblema from '../Emblema_Policia.jpg'
import fuerza from '../FuerzaAereaFAB.png'

function Fuerza() {
  return (
    <div className='contenedor'>
        <div className='contenedor-uno'>
            <img src={armada} alt="arm"/>
            <img src={ejercito} alt="ejer"/>
        </div>
        <div className='contenedor-dos'>
            <img src={emblema} alt="emb"/>
            <img src={fuerza} alt="fuer"/>
        </div>
    </div>
  )
}

export { Fuerza }