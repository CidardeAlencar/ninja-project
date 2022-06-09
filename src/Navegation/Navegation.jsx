import React from 'react'
import {Link} from 'react-router-dom'


function Navegation() {
  return (
      
        <nav className='to'>
            <ul>
                <li>
                    <Link to = "/chalecos"><span className='at'>Chalecos y Accesorios</span></Link> 
                </li>
                <li>
                     <Link to = "/mochilas"><span className='at2'>Mochilas y Maletines</span></Link>
                </li>
                <li>
                     <Link to = "/billeteras"><span className='at3'>Billeteras y Portalibretas</span></Link>
                </li>
                <li>
                    <Link to = "/uniformes"><span className='at4'>Uniformes y Chamarras</span></Link>
                </li>
                <li>
                    <Link to = "/cascos"><span className='at5'>Cascos y Forros</span></Link>
                </li>
                <li>
                <Link to = "/botas"><span className='at6'>Botas y Medias</span></Link>
                </li>
            </ul>
        </nav>

 

  )
}

export { Navegation } 