import React from 'react'
import LogoNinja from '../assets/LOGO NINJA.png'
import TextoNinja from '../assets/TEXTO NINJA.png'
import LogoUsuario from '../assets/LOGO USUARIO.png'
// import  {Menu} from './Menu.jsx' 
import '../styles/Logos.css'
function Logos() {
  return (
    <div className='Molecula2'>
          {/* <Menu/> */}
        <img src={LogoNinja} alt='logo ninja'/>
        <img src={TextoNinja} alt='texto ninja'/>
      
        <img src={LogoUsuario} alt='Logo Usuario' id='usuario'/>
    </div>
  )
}

export {Logos}