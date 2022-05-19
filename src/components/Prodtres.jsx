import React from 'react'
import "../styles/Prodtres.css"
import Fototres from "../assets/3.png"

function Prodtres() {
    return (
        <div className='producto-tres'>
            <div className='itemtres'>
                <img src= {Fototres} alt="" />
                <span>Nombre: </span>
                <span>Categoria: <a href=""> Indumentaria</a></span>
            </div>
        </div>
    )
}

export {Prodtres}