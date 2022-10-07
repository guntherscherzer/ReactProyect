import React, { useState } from 'react';
function ItemDetail({item}) {
    return(
        <div className="col-3 p-3">
            <img src={item.pictureUrl}  />
            <div className="card">                
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>  
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">${item.price}</p>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail