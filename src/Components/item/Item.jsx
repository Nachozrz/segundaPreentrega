import React from "react"
import './item.css'

const Item =({id,nombre,img,precio})=>{
    return(
<div className="card">
        <h3>nombre:{nombre}</h3>
        <img src={img} alt={nombre} />
        <p>{id}</p>
        <p>{precio} </p>
</div>
    )
}

export default Item