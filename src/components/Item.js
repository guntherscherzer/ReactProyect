import React from 'react';
import { Link } from 'react-router-dom';
function Item ({id, title, description, price, pictureUrl}) {
    return(
        <div className="col-3 p-3">
            <div className="card">
                <img src={pictureUrl}  className="card-img-top" alt={title}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>  
                    <p className="card-text">{description}</p>
                    <p className="card-text">${price}</p>
                    <Link to={`/item/${id}`} className="btn btn-primary"> See more</Link>
                </div>
            </div>
        </div>
    )   
}
export default Item