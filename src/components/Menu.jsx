import React from 'react'
//import MenuIcon from '../assets/MENU ICON.png'
import '../styles/Menu.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import {Bodyt} from './Bodyt'
import {Nosotros} from './Nosotros'
import {Ubicacion} from './Ubicacion'
import {PaginaMaster} from '../card_precio/PaginaMaster.jsx'
import {Navegation} from '../Navegation/Navegation.jsx'

import {Lista1} from '../card_precio/Lista1'
import {Lista2} from '../card_precio/Lista2'
import {Lista3} from '../card_precio/Lista3'
import {Lista4} from '../card_precio/Lista4'
import {Lista5} from '../card_precio/Lista5'
import {Lista6} from '../card_precio/Lista6'

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
            <NavLink to='Nosotros'>
            <li>
                Nosotros
            </li>
            </NavLink>
            <NavLink to='Categorias' >
                <li>
                    Categorías
                </li>
            </NavLink>
            <NavLink to='Ubicacion' >
                <li>
                    Ubicacion
                </li>
            </NavLink>
        </ul>
    </div>
    <Routes>
        <Route path='Inicio' element={<Bodyt/>}/>
        <Route path='Nosotros' element={<Nosotros/>}/>
        <Route path='Categorias' element={<Navegation/>}/>
        <Route path='chalecos' element={<Lista1/>} />
        <Route path='mochilas' element={<Lista2/>} />
        <Route path='billeteras' element={<Lista3/>} />
        <Route path='uniformes' element={<Lista4/>} />
        <Route path='cascos' element={<Lista5/>} />
        <Route path='botas' element={<Lista6/>} />
        <Route path='Ubicacion' element={<Ubicacion/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export {Menu}