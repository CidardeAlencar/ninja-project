import React from 'react'
import "../styles/Prodcua.css"
import Fotocua from "../assets/4.png"

function Prodcua() {
    return (
        <div className='producto-cua'>
            <div className='itemcua'>
                <img src= {Fotocua} alt="" />
                <span>Nombre: </span>
                <span>Categoria: <a href=""> Indumentaria</a></span>
            </div>
        </div>
    )
}

export {Prodcua}