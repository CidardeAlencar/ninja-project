import React from 'react'
import {BrowserRouter, Routes,Route, NavLink, Navigate} from 'react-router-dom'
import {Logos} from '../components/Logos'
import {Home} from '../components/Home'
import {Nosotros} from '../components/Nosotros'
import {Categorias} from '../components/Categorias'
import {Ubicacion} from '../components/Ubicacion'
import '../styles/Menu.css'

function Navegation() {
  return (
      <BrowserRouter>
      <Logos/>
      <nav className='Menu'> 
          <ul className='Listas'>
              <li>
                  <NavLink to='/home' className={({isActive})=> isActive ? 'nav-active' : ''}>
                  Home
                  </NavLink>
              </li>
              <li>
                  <NavLink to='/nosotros' className={({isActive})=> isActive ? 'nav-active' : ''}>
                  Nosotros
                  </NavLink>
              </li>
              <li>
                  <NavLink to='/categorias' className={({isActive})=> isActive ? 'nav-active' : ''}>
                  Categorias
                  </NavLink>
              </li>
              <li>
                  <NavLink to='/ubicacion' className={({isActive})=> isActive ? 'nav-active' : ''}>
                  Ubicacion
                  </NavLink>
              </li>
          </ul>
      </nav>
    
        <Routes>
          <Route path='nosotros' element={<Nosotros/>}/>
          <Route path='categorias' element={<Categorias/>}/>
          <Route path='ubicacion' element={<Ubicacion/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='/*' element={<Navigate to='/home/' replace/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export { Navegation}