import React from 'react'
import Linterna from '../assets/LINTERNAS Y ACCESORIOS.jpg'
import Kit from '../assets/KIT LIMPIEZA.jpg'
import Portada from '../assets/PORTADA.jpg'
import Cintura from '../assets/CINTURONES TACTICOS.jpg'
import './Imagen.css'
function Imagen() {
  return (
          <div className='slider'>
              <ul>
                <li><img src={Portada} alt="" /></li>
                <li><img src={Linterna} alt="" /></li>
                <li><img src={Kit} alt="" /></li>
                <li><img src={Cintura} alt="" /></li>
              </ul>
          </div>
        )
}

export  {Imagen}