import React from 'react'
import {Link} from 'react-router-dom'
import './Navegation.css'

function Navegation() {
  return (
      
        <nav className='to'>
            <ul>
                <li>
                    <Link to = "/chalecos" className='at'><span >Chalecos y Accesorios</span></Link> 
                </li>
                <li>
                     <Link to = "/mochilas" className='at'><span >Mochilas y Maletines</span></Link>
                </li>
                <li>
                     <Link to = "/billeteras" className='at'><span >Billeteras y Portalibretas</span></Link>
                </li>
                <li>
                    <Link to = "/uniformes" className='at'><span >Uniformes y Chamarras</span></Link>
                </li>
                <li>
                    <Link to = "/cascos" className='at'><span >Cascos y Forros</span></Link>
                </li>
                <li>
                <Link to = "/botas" className='at'><span >Botas y Medias</span></Link>
                </li>
                <li>
                <Link to = "/cuchillos" className='at'><span >Cuchillos</span></Link>
                </li>
                <li>
                <Link to = "/deportivo" className='at'><span >Deportivo</span></Link>
                </li>
                <li>
                <Link to = "/guantes" className='at'><span >Guantes</span></Link>
                </li>
            </ul>
        </nav>

 

  )
}

export { Navegation } 