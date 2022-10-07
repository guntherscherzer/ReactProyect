import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
function ItemDetailContainer() {
    const {id} = useParams();
    const [item, setItem]= useState([])
   
    useEffect(() => {
        fetch(`../prodList.json`)
        .then((res)=>res.json())
        .then((pokemons)=>{
            let pokemon = pokemons.find((p)=>p.id==id)
            setTimeout(()=>{
                setItem(pokemon)
            },2000)
        })

    })
    return(
        <ItemDetail item={item}/>
    )
}
export default ItemDetailContainer