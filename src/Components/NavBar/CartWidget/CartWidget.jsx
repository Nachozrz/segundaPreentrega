import'./CartWidget.css'

const CartWidget = () => {
    const carrito="https://cdn-icons-png.flaticon.com/512/3050/3050173.png"
    return(
        <div>
            
            <img className='imagen' src={carrito} alt="carrito" />
            <strong>3</strong>
        </div>
    )
}

export default CartWidget