const divCards = document.querySelector('.price_table')

const buscarProductos = async () => {
    const productosFetch = await fetch('./js/consolas.json')
    const productosJson = await productosFetch.json()
    productosJson.forEach(prod => {
        const { id, price, title, image } = prod
        divCards.innerHTML += `
        <div class="price_element">
            <p class="price_name">${title}</p>
            <img src="${image}" alt="" class="price_cards">
            <p class="price_items">S/ ${price}</p>
            <button onclick="agregarProducto(${id})" class="price_finalizar">Agregar al Carrito</button>
        </div>
        `        
    })
    
}

function agregarProducto(id) {
    console.log(id)
}

buscarProductos()

