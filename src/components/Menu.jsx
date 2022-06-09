import React from 'react'
//import MenuIcon from '../assets/MENU ICON.png'
import '../styles/Menu.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import {Bodyt} from './Bodyt'
import {PaginaMaster} from '../card_precio/PaginaMaster.jsx'
function Menu() {
  return (
    <BrowserRouter>
        <div className='Menu'>
        {/* <img src={MenuIcon} alt='Menu Icon' id='menuicon'/> */}
        <ul className='Listas'>
            <NavLink to='Inicio'>
            <li>
                Inicio
            </li>
            </NavLink>
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
        <Route path='Inicio' element={<Bodyt/>}/>
        <Route path='Categorias' element={<PaginaMaster/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export {Menu}