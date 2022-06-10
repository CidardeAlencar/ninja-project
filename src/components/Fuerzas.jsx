import React from 'react'
import '../styles/Fuerzas.css'
import armada from '../assets/ARMADA.png'
import ejercito from '../assets/EjercitoEB.png'
import emblema from '../assets/logo poli.png'
import fuerz from '../assets/FuerzaAereaFAB.png'

function Fuerzas() {
  return (
    <div className='contenedor'>
        <div className='contenedor-uno'>
            <img src={armada} alt="arm"/>
            <img src={ejercito} alt="ejer"/>
        </div>
        <div className='contenedor-dos'>
            <img src={emblema} alt="emb"/>
            <img src={fuerz} alt="fuer"/>
        </div>
    </div>
  )
}

export {Fuerzas}
