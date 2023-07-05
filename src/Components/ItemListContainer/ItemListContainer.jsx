import { useState, useEfect } from "react";
import { getProductos } from "../../asyncmock";
import ItemList from "../itemList/itemList";
const ItemListContainer = ({ props }) => {
    const [productos, setProductos] = useState([])

    useEfect(() => {
        getProductos()
            .then(respuesta => setProductos(respuesta))
    }, [])
    return (
        <>
          <h2> {props.greeting} </h2>
            <ItemList productos={productos}/>
        </>

    )
}

export default ItemListContainer   