import React from 'react'
import "../styles/Produno.css"

function Produno({img, name, category}) {
    return (
        <div className='producto-uno'>
            <div className='itemuno'>
                <img src={img} alt="" />
                <span>Nombre: {name} </span>
                <span>Categoria: {category} </span>
            </div>
        </div>
    )
}

export {Produno}