import React, { useState } from 'react';
function ItemCount({stock}) {
    const [count, setCount]= useState(1);
    function countSum() {
        let newCount 
        if (count+1>stock) {
            newCount=stock
        }else{
            newCount=count+1
        }
        setCount(newCount);
    }
    function countRest() {
        let newCount
        if (count-1<=0) {
            newCount=1
        }else{
            newCount=count-1
        }
        setCount(newCount);
    }
    function onAdd() {
        
        if (stock>0) {
            console.log("Agrgar al carrito");
        }
    }

    return(

        <div className="d-flex">
            <div className="input-group me-5 h-40">
                <button className="btn btn-danger text-white fs-3" type="button" onClick={()=>countRest()}>-</button>
                <input type="text" className="form-control" value={count}/>
                <button className="btn btn-danger  text-white fs-3" type="button"onClick={()=>countSum()}>+</button>
            </div>
            <div className="">
            <button className="btn btn-outline-secondary" type="button" onClick={()=>onAdd()}>Add to the cart</button>
            </div>
        </div>
    )
}   
export default ItemCount
