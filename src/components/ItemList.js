import React, { useState } from 'react';
import Item from './Item';
function ItemList({items}) {
    return(
        <div className='d-flex flex-wrap justify-content-evenly'>
            {items.map(item => <Item key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} />)}
        </div>
    )
}
export default ItemList 