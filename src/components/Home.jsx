import React from 'react'
import Imagen from '../imagen/Imagen.jsx'
import { Fuerza } from './Fuerzas.jsx';
import { Lomasvisto } from './Lomasvisto';

function Home() {
  return (
    <><Imagen/> 
    <Fuerza/>
    <Lomasvisto/>
    </>
  )
}

export {Home}