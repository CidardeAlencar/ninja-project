import React from 'react'
import '../Style/Nosotros.css'
import nos from '../assets/ultimo.jpg'

function Nosotros() {
  return (
    <span className='contenedor-nosotros'>
      <img src={nos} alt="nosotros" />
      <div className='parrafo'>
        <span>NUESTRA EMPRESA</span>
        <span>Confecciones “NINJA”, nuestra empresa es una empresa estatal dedicada a la exportación de suministros militares y. Como empresa legal, el negocio principal de nuestra empresa es la venta de indumentaria y equipo militar a las diferentes unidades militares de nuestro país. Brindamos soluciones de producción, confección y envío de nuestra mercadería. Desde su creación en 2019, cuenta con experiencia en la importación y exportación de suministros militares, equipos logísticos y productos varios, lo que ha mejorado nuestro nivel día a día. 
Hasta ahora, hemos establecido relaciones comerciales exitosas con clientes de más de 6 ciudades. Creemos que, a través de una cooperación sincera, podemos continuar estableciendo buenas relaciones comerciales y lograr beneficios mutuos y resultados beneficiosos para todos.
</span>
      </div>
      
    </span>
  )
}

export {Nosotros}