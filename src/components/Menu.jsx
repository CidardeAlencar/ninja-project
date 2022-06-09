import React from 'react'
//import MenuIcon from '../assets/MENU ICON.png'
import '../styles/Menu.css'
function Menu() {
  return (
    <nav className='Menu'>
        {/* <img src={MenuIcon} alt='Menu Icon' id='menuicon'/> */}
        <ul className='Listas'>
            <li>
                Inicio
            </li>
            <li>
                Nosotros
            </li>
            <li>
                Categorías
            </li>
            <li>
                Ubicación
            </li>
        </ul>
    </nav>
  )
}

export {Menu}