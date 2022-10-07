import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
function ItemListContainer({ruta}) {
    const {id} = useParams();
    const [items, setItems]= useState([])
   
    useEffect(() => {
        fetch(`${ruta}prodList.json`)
        .then((res)=>res.json())
        .then((pokemons)=>{
            if (id) {
                pokemons=pokemons.filter((p)=>p.categories.includes(id))
            }
            setTimeout(()=>{
                setItems(pokemons)
            },2000)
        })

    })
    return(
        <ItemList items={items}/>
    )
}

export default ItemListContainer;