//recuperar el carrito del almacenamiento
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//muestra los productos en el carrito

const mostrarCarrito = () => {

    const lista = document.getElementById("lista-carrito")
    lista.innerHTML = "";
    if (carrito.lenght === 0) {
        lista.innerHTML = '<p> Tu carrito esta vacio </p>'
        actualizarResumen();
        return;
    }
    carrito.forEach((item, indice) => {
        const producto = document.createElement("article")
        producto.classList.add("producto")
        producto.innerHTML = `
        <h5> ${item.nombre} </h5>
        <p class="precio"> Precio $ ${item.precio} </p>
        <button onclick="eliminarDelCarrito (${indice})"class="btn btn-danger" >Eliminar</button>`;
        lista.appendChild(producto)
    });

    actualizarResumen();
};

// Actualiza el resumen del carrito
const actualizarResumen = () => {
    const totalProductos = document.getElementById("total-productos");
    const importeTotal = document.getElementById("importe-total");

    const total = carrito.reduce((acc, item) => acc + item.precio, 0);
    totalProductos.textContent = carrito.length;
    importeTotal.textContent = total.toFixed(2);

    const botonCompra = document.querySelector("button[onclick='realizarCompra()']");
    const resumenCarrito = document.getElementById("resumen-carrito");
    resumenCarrito.appendChild(botonCompra);
};



//eliminar

const eliminarDelCarrito = (indice) => {
    carrito.splice(indice, 1);   //desde el indice, borra una posicion 
    localStorage.setItem("carrito", JSON.stringify(carrito))
    mostrarCarrito();
}
//Simular la compra

const realizarCompra = () => {
    alert("Compra realizada con Exito")
    localStorage.removeItem("carrito")
    window.location.href = "../index.html"

}
// Inicializa el carrito al cargar la página
mostrarCarrito();
