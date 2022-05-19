import React from 'react'
import "../styles/Proddos.css"
import Fotodos from "../assets/2.png"

function Proddos() {
    return (
        <div className='producto-dos'>
            <div className='itemdos'>
                <img src= {Fotodos} alt="" />
                <span>Nombre: </span>
                <span>Categoria: <a href=""> Indumentaria</a></span>
            </div>
        </div>
    )
}

export {Proddos}