import React from 'react'
import "../styles/Lomasvisto.css"
import { Produno } from './Produno'
import { Titulo } from './Titulo'
import ima1 from "../assets/1.png"
import ima2 from "../assets/2.png"
import ima3 from "../assets/3.png"
import ima4 from "../assets/4.png"

const cards = [
    {
        id:"1",
        img:ima1,
        name:"Vestimenta",
        category:"Indumentaria"
    },
    {
        id:"2",
        img:ima2,
        name:"Equipo militar",
        category:"Indumentaria"
    },
    {
        id:"3",
        img:ima3,
        name:"Linternas tacticas",
        category:"Indumentaria"
    },
    {
        id:"4",
        img:ima4,
        name:"Mochilas, etc",
        category:"Indumentaria"
    }
]

function Lomasvisto(props) {
    return (
        <div className='part-alanes'>
            <Titulo/>
            <div className='cont-tarjetas'>
                {
                    cards.map(card => (
                        <Produno img={card.img} name={card.name} category={card.category} />
                    ))
                }
            </div>
        </div>
    )
}

export {Lomasvisto}