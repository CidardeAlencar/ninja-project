import React from 'react'
//import MenuIcon from '../assets/MENU ICON.png'
import '../styles/Menu.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import {Bodyt} from './Bodyt'
import {Nosotros} from './Nosotros'
import {Ubicacion} from './Ubicacion'

import {Navegation} from '../Navegation/Navegation.jsx'

import {Lista1} from '../card_precio/Lista1'
import {Lista2} from '../card_precio/Lista2'
import {Lista3} from '../card_precio/Lista3'
import {Lista4} from '../card_precio/Lista4'
import {Lista5} from '../card_precio/Lista5'
import {Lista6} from '../card_precio/Lista6'
import {Lista8} from '../card_precio/Lista8'
import {Lista9} from '../card_precio/Lista9'
import {Lista10} from '../card_precio/Lista10'

function Menu() {
  return (
    <BrowserRouter>
        <div className='Menu'>
        {/* <img src={MenuIcon} alt='Menu Icon' id='menuicon'/> */}
        <ul className='Listas'>
            <NavLink to='Inicio' className={"no"}>
            <li>
                INICIO
            </li>
            </NavLink>
            <NavLink to='Nosotros' className={"no"}>
            <li>
                NOSOTROS
            </li>
            </NavLink>
            <NavLink to='Categorias' className={"no"}>
                <li>
                    CATEGORIAS
                </li>
            </NavLink>
            <NavLink to='Ubicacion' className={"no"}>
                <li>
                    UBICACION
                </li>
            </NavLink>
        </ul>
    </div>
    <Routes>
        <Route path='/' element={<Bodyt/>}/>
        <Route path='Inicio' element={<Bodyt/>}/>
        <Route path='Nosotros' element={<Nosotros/>}/>
        <Route path='Categorias' element={<Navegation/>}/>
        <Route path='chalecos' element={<Lista1/>} />
        <Route path='mochilas' element={<Lista2/>} />
        <Route path='billeteras' element={<Lista3/>} />
        <Route path='uniformes' element={<Lista4/>} />
        <Route path='cascos' element={<Lista5/>} />
        <Route path='botas' element={<Lista6/>} />
        <Route path='cuchillos' element={<Lista8/>} />
        <Route path='deportivo' element={<Lista9/>} />
        <Route path='guantes' element={<Lista10/>} />
        <Route path='Ubicacion' element={<Ubicacion/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export {Menu}