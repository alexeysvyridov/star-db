import React from 'react'
import './item-list.css'
function ItemList() {
    return (
        <div className="container-block" >
            <ul className="item-list list-group">
                <li className="list-group-item">Luke Skywalker</li>
                <li className="list-group-item">Darth Vader</li>
                <li className="list-group-item">R2-D2</li>
            </ul>
        </div>
    )
};

export default  ItemList;