//variable global para almacenar los productos seleccionados

let carrito = [];  //array de objetos!!!

const agregarAlcarrito = (nombre, precio) => {
    //agregar al carrito como objeto
    carrito.push({ nombre, precio })

 actualizarContador()

 alert(`Agregaste : ${nombre} al carrito`)

}

   const actualizarContador= () => {
    //cambiamos el contador que esta en el html del id=contador-carrito
    document.getElementById("contador-carrito").textContent = carrito.length
}

//guardar el contador en el local storage
window.addEventListener("beforeunload", ()=>{localStorage.setItem("carrito",JSON.stringify(carrito))});
