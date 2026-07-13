const listaProductos = document.getElementById("lista-productos");
const buscar = document.getElementById("buscar");
const categoria = document.getElementById("categoria");
const orden = document.getElementById("orden");

function mostrarProductos(lista) {
    listaProductos.innerHTML = "";

    if (lista.length === 0) {
        listaProductos.innerHTML = `
            <p class="sin-productos">
                No se encontraron productos.
            </p>
        `;

        return;
    }

    lista.forEach(producto => {
        listaProductos.innerHTML += `
            <div class="producto-card">
                <img src="${producto.imagen}" alt="${producto.nombre}">

                <h3>${producto.nombre}</h3>

                <p class="categoria">${producto.categoria}</p>
                <p class="vendedor">Vendedor: ${producto.vendedor}</p>
                <p class="precio">S/. ${producto.precio}</p>

                <a href="detalle.html?id=${producto.id}" class="boton-pequeno">
                    Ver detalle
                </a>
            </div>
        `;
    });
}

function filtrarProductos() {
    let resultado = [...productos];

    const texto = buscar.value.toLowerCase();
    const categoriaSeleccionada = categoria.value;
    const ordenSeleccionado = orden.value;

    resultado = resultado.filter(producto =>
        producto.nombre.toLowerCase().includes(texto)
    );

    if (categoriaSeleccionada !== "Todos") {
        resultado = resultado.filter(producto =>
            producto.categoria === categoriaSeleccionada
        );
    }

    if (ordenSeleccionado === "menor") {
        resultado.sort((a, b) => a.precio - b.precio);
    }

    if (ordenSeleccionado === "mayor") {
        resultado.sort((a, b) => b.precio - a.precio);
    }

    mostrarProductos(resultado);
}

buscar.addEventListener("input", filtrarProductos);
categoria.addEventListener("change", filtrarProductos);
orden.addEventListener("change", filtrarProductos);

mostrarProductos(productos);