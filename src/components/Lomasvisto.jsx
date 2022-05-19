import React from 'react'
import "../styles/Lomasvisto.css"
import { Prodcua } from './Prodcua'
import { Prodtres } from './Prodtres'
import { Proddos } from './Proddos'
import { Produno } from './Produno'
import { Titulo } from './Titulo'

function Lomasvisto() {
    return (
        <div className='part-alanes'>
            <Titulo/>
            <Produno/>
            <Proddos/>
            <Prodtres/>
            <Prodcua/>
        </div>
    )
}

export {Lomasvisto}