import React from 'react'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
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
                   <NavLink to = '/chalecos'><span className='at'>Chalecos y Accesorios</span></NavLink> 
                </li>
                <li>
                    <NavLink to = '/mochilas'><span className='at2'>Mochilas y Maletines</span></NavLink> 
                </li>
                <li>
                   <NavLink to = '/billeteras'><span className='at3'>Billeteras y Portalibretas</span> </NavLink> 
                </li>
                <li>
                    <NavLink to = '/uniformes'><span className='at4'>Uniformes y Chamarras</span> </NavLink> 
                </li>
                <li>
                   <NavLink to = '/cascos'><span className='at5'>Cascos y Forros</span> </NavLink> 
                </li>
                <li>
                   <NavLink to = '/botas'><span className='at6'>Botas y Medias</span></NavLink> 
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