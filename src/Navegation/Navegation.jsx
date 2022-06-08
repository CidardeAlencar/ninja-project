import React from 'react'
import {BrowserRouter, Routes, Route, NavLink, Navigate} from 'react-router-dom'
import {Lista1} from '../Components/Lista1'
import {Lista2} from '../Components/Lista2'
import {Lista3} from '../Components/Lista3'
import {Lista4} from '../Components/Lista4'
import {Lista5} from '../Components/Lista5'
import {Lista6} from '../Components/Lista6'

function Navegation() {
  return (
      <BrowserRouter>
        <nav>
            <ul>
                <li>
                   <NavLink to = '/chalecos'>Chalecos y Accesorios</NavLink> 
                </li>
                <li>
                    <NavLink to = '/mochilas'>Mochilas y Maletines</NavLink> 
                </li>
                <li>
                   <NavLink to = '/billeteras'>Billeteras y Portalibretas</NavLink> 
                </li>
                <li>
                    <NavLink to = '/uniformes'>Uniformes y Chamarras</NavLink> 
                </li>
                <li>
                   <NavLink to = '/cascos'>Cascos y Forros</NavLink> 
                </li>
                <li>
                   <NavLink to = '/botas'>Botas y Medias</NavLink> 
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path='chalecos' element={<Lista1/>} />
            <Route path='mochilas' element={<Lista2/>} />
            <Route path='billeteras' element={<Lista3/>} />
            <Route path='uniformes' element={<Lista4/>} />
            <Route path='cascos' element={<Lista5/>} />
            <Route path='botas' element={<Lista6/>} />
        </Routes>
      </BrowserRouter>
  )
}

export { Navegation } 