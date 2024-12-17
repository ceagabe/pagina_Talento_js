//recuperar el carrito del almacenamiento
const carrito=JSON.parse(localStorage.getItem("carrito")) || [];

//muestra los productos en el carrito

const mostrarCarrito= ()=>{

    const lista = document.getElementById ("lista-carrito")
    lista.innerHTML ="";
       if (carrito.lenght ===0){
        lista.innerHTML= '<p> Tu carrito esta vacio </p>'
        return;
       }
       carrito.forEach((item, indice)=> {
        const producto = document.createElement("article")
        producto.classList.add("producto")
        producto.innerHTML= `
        <h2> ${item.nombre} </h2>
        <p class="precio">${item.precio}</p>
        <button onclick="eliminarDelCarrito (${indice})"class="btn btn-danger" >Eliminar</button>`;
        lista.appendChild(producto)
       });
       

}
//eliminar

const eliminarDelCarrito=(indice)=> {
    carrito.splice(indice, 1);   //desde el indice, borra una posicion 
   localStorage.setItem("carrito", JSON.stringify(carrito))
   mostrarCarrito();
}
//Simular la compra

const realizarCompra=()=>{
    alert("Compra realizada con Exito")
    localStorage.removeItem("carrito")
    window.location.href="../index.html"

}
//inicializar la pagina
mostrarCarrito()