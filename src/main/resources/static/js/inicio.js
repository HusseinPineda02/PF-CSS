const destacados = document.getElementById("productos-destacados");
const recientes = document.getElementById("productos-recientes");

function crearTarjeta(producto){

    return `
        <div class="producto-card">

            <img src="/${producto.imagen}" alt="${producto.nombre}">

            <h3>${producto.nombre}</h3>

            <p class="vendedor">
                Vendedor: ${producto.vendedor}
            </p>

            <p class="precio">
                S/. ${producto.precio}
            </p>

            <a href="/detalle?id=${producto.id}" class="boton-pequeno">
                Ver detalle
            </a>

        </div>
    `;

}

fetch("/api/productos")
.then(response => response.json())
.then(productos=>{

    productos.slice(0,4).forEach(producto=>{

        destacados.innerHTML+=crearTarjeta(producto);

    });

    productos.slice(4,8).forEach(producto=>{

        recientes.innerHTML+=crearTarjeta(producto);

    });

});