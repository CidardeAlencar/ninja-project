import React from 'react'
import { Prod1 } from './Prod1';
import '../Style/Categoria1.css'

function Catgoria1(props) {
    const list = props.list
    return (
      
      <div className='categoria1'>
        <link rel="stylesheet" href="desktop1024.css" media="screen and (min-width: 1024px)"/>
        {/* <Prod1/> */}
        {list.map((cartas)=> <Prod1 nombre={cartas.nombre} precio={cartas.precio} img={cartas.img} category={cartas.category}/>)}
      </div>
    );  
}

export {Catgoria1}