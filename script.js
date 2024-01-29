//1.En un archivo script.js, realizar lo siguiente:
// • Declarar una lista de los productos con los siguientes datos: id, nombre, código, precio
// unitario, tipo de accesorio (anillo, brazalete, collar, aretes, etc.), imágenes, descripción, 
// cantidad en stock por color y/o talla.


const listaProductos = [
    {
        "ID" : 00,
        "Nombre" : "Luxury Charms Ring",
        "Codigo": 78205,
        "Precio": 620.73,
        "Tipo": "Anillo",
        "Imágenes": "/assets/Image 5.png" ,
        "Descripcion": "Lorem esse et culpa proident duis mollit nisi proident elit pariatur elit sit consectetur et do proident ea voluptate deserunt. Consequat dolore qui aute magna voluptate enim qui id cillum enim excepteur occaecat culpa deserunt eu.Culpa labore incididunt labore proident eu anim in." ,
        "Cantidad": 5 
    },
    {
        "ID" : 01,
        "Nombre" : "Exquisite Earrings",
        "Codigo": 92701,
        "Precio": 125.28,
        "Tipo": "Arete",
        "Imágenes": "/assets/Image (1).png" ,
        "Descripcion": "Lorem esse et culpa proident duis mollit nisi proident elit pariatur elit sit consectetur et do proident ea voluptate deserunt. Consequat dolore qui aute magna voluptate enim qui id cillum enim excepteur occaecat culpa deserunt eu.Culpa labore incididunt labore proident eu anim in." ,
        "Cantidad": 5
    },
    {
        "ID" : 02,
        "Nombre" : "Delights Earrings",
        "Codigo": 78201,
        "Precio": 327.71,
        "Tipo": "Arete",
        "Imágenes": "/assets/delights.png" ,
        "Descripcion": "Lorem esse et culpa proident duis mollit nisi proident elit pariatur elit sit consectetur et do proident ea voluptate deserunt. Consequat dolore qui aute magna voluptate enim qui id cillum enim excepteur occaecat culpa deserunt eu.Culpa labore incididunt labore proident eu anim in." ,
        "Cantidad": 5 
    },
]

console.log(listaProductos)

const agregarProductos = (ID, Nombre, Codigo, Precio, Tipo, Imágenes, Descripcion, Cantidad) => {
    const existeCodigo = listaProductos.findIndex(item => item.Codigo === Codigo)
    console.log("existe codigo", existeCodigo)
    if(existeCodigo !== -1){
    alert("ya existe un producto con este codigo")
    }else {
    const producto = {
        ID,
        Nombre,
        Codigo,
        Precio,
        Tipo,
        Imágenes,
        Descripcion,
        Cantidad
    }
    listaProductos.push(producto)
    alert("Producto correctamente creado")
}
}

//filtra por tipo
const filtrarProductosTipo = (Tipo)=> {
    const productosFiltrados = listaProductos.filter(
        (item) => item.Tipo === Tipo);

    console.log(productosFiltrados);

    return productosFiltrados;
}

const tipoBuscado = "Anillo"; 
const productosFiltrados = filtrarProductosTipo(tipoBuscado);


//busqueda por nombre
const nombreProducto = prompt("Por favor ingrese el nombre del producto");
const productoEncontrado = listaProductos.find ((item) => item.Nombre === nombreProducto);
if (productoEncontrado) {
        console.log({... productoEncontrado});
    }
else{
        console.log("No encontrado");
    }



//ordenar ascendente
listaProductos.sort((a, b) => {
    const precioA = a.Precio;
    const precioB = b.Precio;

    return precioA - precioB;
});

console.log({... listaProductos});

//ordenar descendente
listaProductos.sort((a, b) => {
    const precioA = a.Precio;
    const precioB = b.Precio;

    return precioB - precioA;
});

console.log({... listaProductos});


//total a pagar
const totalAPagar = listaProductos.reduce((total, item) => total + item.Precio * item.Cantidad, 0);
console.log (listaProductos,"Total A Pagar: $", totalAPagar);

