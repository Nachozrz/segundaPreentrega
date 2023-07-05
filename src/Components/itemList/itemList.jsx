import React from "react"
import Item from "../item/Item"


const ItemList = ({productos }) => {
    return(
        <div className="elementos">
            {productos.map(prod=> <Item key={prod.id} {...prod}/> )}
        </div>
    )}
        
export default ItemList
