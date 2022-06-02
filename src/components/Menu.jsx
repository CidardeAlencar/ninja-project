import React from 'react'
//import MenuIcon from '../assets/MENU ICON.png'
import '../styles/Menu.css'
import Producto from '../card_precio/Producto'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

function Menu() {
  return (
    <BrowserRouter>
        <div className='Menu'>
        {/* <img src={MenuIcon} alt='Menu Icon' id='menuicon'/> */}
        <ul className='Listas'>
            <li>
                Inicio
            </li>
            <li>
                Nosotros
            </li>
            <NavLink to='Categorias' >
                <li>
                    Categorías
                </li>
            </NavLink>
            <li>
                Ubicación
            </li>
        </ul>
    </div>
    <Routes>
        <Route path='Categorias' element={<Producto/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export {Menu}