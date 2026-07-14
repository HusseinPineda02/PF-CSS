const detalleProducto = document.getElementById("detalle-producto");
const relacionados = document.getElementById("productos-relacionados");

const parametros = new URLSearchParams(window.location.search);
const id = Number(parametros.get("id"));

fetch("/api/productos")
.then(response => response.json())
.then(productos => {

    const producto = productos.find(p => p.id === id);

    if (!producto) {

        detalleProducto.innerHTML = `
            <h1>Producto no encontrado</h1>
        `;

        return;
    }

    detalleProducto.innerHTML = `
        <div class="producto-imagen">
            <img src="/${producto.imagen}" alt="${producto.nombre}">
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

    productos
        .filter(p => p.categoria === producto.categoria && p.id !== producto.id)
        .slice(0,3)
        .forEach(item=>{

            relacionados.innerHTML += `

            <div class="producto-card">

                <img src="/${item.imagen}" alt="${item.nombre}">

                <h3>${item.nombre}</h3>

                <p class="precio">
                    S/. ${item.precio}
                </p>

                <a href="/detalle?id=${item.id}" class="boton-pequeno">
                    Ver detalle
                </a>

            </div>

            `;

        });

});

function agregarCarrito(id){

    fetch("/api/productos")
    .then(response=>response.json())
    .then(productos=>{

        let carrito =
            JSON.parse(localStorage.getItem("carrito")) || [];

        const producto = productos.find(p=>p.id===id);

        const existe = carrito.find(p=>p.id===id);

        if(existe){

            existe.cantidad++;

        }else{

            carrito.push({
                ...producto,
                cantidad:1
            });

        }

        localStorage.setItem(
            "carrito",
            JSON.stringify(carrito)
        );

        alert("Producto agregado al carrito");

    });

}