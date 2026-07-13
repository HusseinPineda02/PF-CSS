const detalleProducto = document.getElementById("detalle-producto");
const relacionados = document.getElementById("productos-relacionados");

const parametros = new URLSearchParams(window.location.search);
const id = Number(parametros.get("id"));

const producto = productos.find(producto => producto.id === id);

if (producto) {
    detalleProducto.innerHTML = `
        <div class="producto-imagen">
            <img src="${producto.imagen}" alt="${producto.nombre}">
        </div>

        <div class="producto-info">
            <h1>${producto.nombre}</h1>

            <p class="categoria">
                Categoría: ${producto.categoria}
            </p>

            <p class="vendedor">
                Vendedor: ${producto.vendedor}
            </p>

            <p class="precio">
                S/. ${producto.precio}
            </p>

            <p class="descripcion">
                ${producto.descripcion}
            </p>

            <button class="boton" onclick="agregarCarrito(${producto.id})">
                Agregar al carrito
            </button>
        </div>
    `;

    const listaRelacionados = productos
        .filter(item =>
            item.categoria === producto.categoria &&
            item.id !== producto.id
        )
        .slice(0, 3);

    listaRelacionados.forEach(item => {
        relacionados.innerHTML += `
            <div class="producto-card">
                <img src="${item.imagen}" alt="${item.nombre}">

                <h3>${item.nombre}</h3>

                <p class="precio">
                    S/. ${item.precio}
                </p>

                <a href="detalle.html?id=${item.id}" class="boton-pequeno">
                    Ver detalle
                </a>
            </div>
        `;
    });
}
else {
    detalleProducto.innerHTML = `
        <h1>Producto no encontrado</h1>
    `;
}

function agregarCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const productoSeleccionado = productos.find(
        producto => producto.id === id
    );

    const productoCarrito = carrito.find(
        producto => producto.id === id
    );

    if (productoCarrito) {
        productoCarrito.cantidad++;
    }
    else {
        carrito.push({
            ...productoSeleccionado,
            cantidad: 1
        });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Producto agregado al carrito");
}