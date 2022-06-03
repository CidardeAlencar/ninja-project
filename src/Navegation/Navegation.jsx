import React from 'react'
import {BrowserRouter, Routes, Route, NavLink, Navigate} from 'react-router-dom'
import {Lista1} from '../Components/Lista1'
import {Lista2} from '../Components/Lista2'

function Navegation() {
  return (
      <BrowserRouter>
        <nav>
            <ul>
                <li>
                   <NavLink to = '/chalecos'>Chalecos y Accesorios</NavLink> 
                </li>
                <li>
                    <NavLink to = '/mochilas'>Mochilas</NavLink> 
                </li>
                <li>Billeteras</li>
                <li>Equipos</li>
            </ul>
        </nav>
        <Routes>
            <Route path='chalecos' element={<Lista1/>} />
            <Route path='mochilas' element={<Lista2/>} />
        </Routes>
      </BrowserRouter>
  )
}

export { Navegation } 