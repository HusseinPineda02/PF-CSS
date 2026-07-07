const listaCarrito = document.getElementById("lista-carrito");
const subtotalTexto = document.getElementById("subtotal");
const igvTexto = document.getElementById("igv");
const totalTexto = document.getElementById("total");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarCarrito() {
    listaCarrito.innerHTML = "";

    if (carrito.length === 0) {
        listaCarrito.innerHTML = `
            <p class="carrito-vacio">
                El carrito está vacío.
            </p>
        `;
    }

    carrito.forEach(producto => {
        listaCarrito.innerHTML += `
            <div class="producto-carrito">
                <img src="${producto.imagen}" alt="${producto.nombre}">

                <div class="producto-carrito-info">
                    <h3>${producto.nombre}</h3>

                    <p class="cantidad">
                        Cantidad: ${producto.cantidad}
                    </p>

                    <p class="precio">
                        S/. ${(producto.precio * producto.cantidad).toFixed(2)}
                    </p>

                    <div class="controles-cantidad">
                        <button onclick="reducirCantidad(${producto.id})">-</button>
                        <button onclick="aumentarCantidad(${producto.id})">+</button>
                        <button class="eliminar" onclick="eliminarProducto(${producto.id})">Eliminar</button>
                    </div>
                </div>
            </div>
        `;
    });

    calcularTotal();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function aumentarCantidad(id) {
    const producto = carrito.find(producto => producto.id === id);

    producto.cantidad++;

    mostrarCarrito();
}

function reducirCantidad(id) {
    const producto = carrito.find(producto => producto.id === id);

    if (producto.cantidad > 1) {
        producto.cantidad--;
    }

    mostrarCarrito();
}

function eliminarProducto(id) {
    carrito = carrito.filter(producto => producto.id !== id);

    mostrarCarrito();
}

function vaciarCarrito() {
    carrito = [];

    localStorage.removeItem("carrito");

    mostrarCarrito();
}

function calcularTotal() {
    let subtotal = 0;

    carrito.forEach(producto => {
        subtotal += producto.precio * producto.cantidad;
    });

    const igv = subtotal * 0.18;
    const total = subtotal + igv;

    subtotalTexto.textContent = `S/. ${subtotal.toFixed(2)}`;
    igvTexto.textContent = `S/. ${igv.toFixed(2)}`;
    totalTexto.textContent = `S/. ${total.toFixed(2)}`;
}

mostrarCarrito();