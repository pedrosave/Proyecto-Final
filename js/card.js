const divCards = document.querySelector('.price_table')

const carrito = []
let productosJson = []

async function obtenerProductos() {
    const productosFetch = await fetch('./js/consolas.json')
    productosJson = await productosFetch.json()
}

const buscarProductos = async () => {
    await obtenerProductos()
    productosJson.forEach(prod => {
        const { id, price, title, image, cart } = prod
        divCards.innerHTML += `
        <div class="price_element">
            <p class="price_name">${title}</p>
            <img src="${image}" alt="" class="price_cards">
            <p class="price_price">S/ ${price}</p>
            <button onclick="agregarProductos(${id})" class="price_finalizar price_agregar">Agregar al Carrito</button>
        </div>
        `
    })

}
buscarProductos()

async function agregarProductos(id) {
    await obtenerProductos()

    const items = productosJson.find((prod) => prod.id === id)
    carrito.push(items)

    console.log(carrito)
}

// const mostrarCarrito = () => {
//     const modalCarrito = document.querySelector('.modal')

//     modalCarrito.innerHTML = ''
//     carrito.forEach((prod) => {
//         const { id, price, title, cantidad } = prod
//         modalCarrito.innerHTML += `
//         <div class="modalContenedor">
//             <div>
//                 <p>Producto: ${title}</p>
//                 <p>Precio: ${price}</p>
//                 <p>Cantidad: ${cantidad}</p>

//                 <button class="price_finalizar price_eliminar" ></button>
//             </div>
//         </div>
//         `
//     })
// }






