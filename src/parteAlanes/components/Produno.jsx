import React from 'react'
import "../styles/Produno.css"
import Fotouno from "../images/1.png"

function Produno() {
    return (
        <div className='producto-uno'>
            <div className='itemuno'>
                <img src= {Fotouno} alt="" />
                <span>Nombre: </span>
                <span>Categoria: <a href=""> Indumentaria</a></span>
            </div>
        </div>
    )
}

export {Produno}