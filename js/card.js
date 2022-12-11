const divCards = document.querySelector('.price_table')


const buscarProductos = async () => {
    const productosFetch = await fetch('./js/consolas.json')
    const productosJson = await productosFetch.json()
    productosJson.forEach(prod => {
        const { id, price, title, category, image } = prod
        divCards.innerHTML += `
        <div class="price_element">
                    <p class="price_name">${title}</p>
                    <img src="${image}" alt="" class="price_cards">
                    <a href="#" class="price_cta">${price}</a>
                </div>
        `
    })
}

buscarProductos()

