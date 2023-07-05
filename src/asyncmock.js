const productos = [
    { id: 1, nombre: "Remera nike", precio: 12000, img: "" },
    { id: 1, nombre: "Campera Everlast", precio: 12000, img: "" },
    { id: 2, nombre: "Pelota de Basquet", precio: 12000, img: "" },
    { id: 3, nombre: "Gorra para Tennis", precio: 12000, img: "" },
]


export const getProductos = () => {
   return new Promise((resolve) => {
    setTimeout(()=> {
        resolve(productos)
    }, 2000) 
   })
   
}