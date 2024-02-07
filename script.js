//1.En un archivo script.js, realizar lo siguiente:
// • Declarar una lista de los productos con los siguientes datos: id, nombre, código, precio
// unitario, tipo de accesorio (anillo, brazalete, collar, aretes, etc.), imágenes, descripción, 
// cantidad en stock por color y/o talla.


const listaProductos = [
    {
        "ID" : 1,
        "Nombre" : "Luxury Gems Necklace",
        "Codigo": 78207,
        "Precio": 168.76,
        "Tipo": "Collar",
        "Imágenes":[ "../assets/luxurygems.png"] ,
        "Descripcion": "Lorem esse et culpa proident duis mollit nisi proident elit pariatur elit sit consectetur et do proident ea voluptate deserunt. Consequat dolore qui aute magna voluptate enim qui id cillum enim excepteur occaecat culpa deserunt eu.Culpa labore incididunt labore proident eu anim in." ,
        "Cantidad": 20 
    },
    {
        "ID" : 1,
        "Nombre" : "Aurora Ring",
        "Codigo": 78206,
        "Precio": 125.28,
        "Tipo": "Anillo",
        "Imágenes":[ "../assets/auroraring.png"] ,
        "Descripcion": "Lorem esse et culpa proident duis mollit nisi proident elit pariatur elit sit consectetur et do proident ea voluptate deserunt. Consequat dolore qui aute magna voluptate enim qui id cillum enim excepteur occaecat culpa deserunt eu.Culpa labore incididunt labore proident eu anim in." ,
        "Cantidad": 5 
    },
    {
        "ID" : 2,
        "Nombre" : "Reflections Necklace",
        "Codigo": 92701,
        "Precio": 620.73,
        "Tipo": "Brazalete",
        "Imágenes": ["../assets/reflectionsnecklace.png"] ,
        "Descripcion": "Lorem esse et culpa proident duis mollit nisi proident elit pariatur elit sit consectetur et do proident ea voluptate deserunt. Consequat dolore qui aute magna voluptate enim qui id cillum enim excepteur occaecat culpa deserunt eu.Culpa labore incididunt labore proident eu anim in." ,
        "Cantidad": 5
    },
    {
        "ID" : 3,
        "Nombre" : "Dreamy Infinity Ring",
        "Codigo": 78201,
        "Precio": 327.71,
        "Tipo": "Anillo",
        "Imágenes": ["../assets/dreamyinfinityring.png" ],
        "Descripcion": "Lorem esse et culpa proident duis mollit nisi proident elit pariatur elit sit consectetur et do proident ea voluptate deserunt. Consequat dolore qui aute magna voluptate enim qui id cillum enim excepteur occaecat culpa deserunt eu.Culpa labore incididunt labore proident eu anim in." ,
        "Cantidad": 5 
    },
    {
        "ID" : 4,
        "Nombre" : "Opulent Jewels Ring",
        "Codigo": 78208,
        "Precio": 168.76,
        "Tipo": "Anillo",
        "Imágenes":[ "../assets/opulentjewelsring.png"] ,
        "Descripcion": "Lorem esse et culpa proident duis mollit nisi proident elit pariatur elit sit consectetur et do proident ea voluptate deserunt. Consequat dolore qui aute magna voluptate enim qui id cillum enim excepteur occaecat culpa deserunt eu.Culpa labore incididunt labore proident eu anim in." ,
        "Cantidad": 5 
    },
    {
        "ID" : 5,
        "Nombre" : "Serene Solitarie Earrings",
        "Codigo": 78209,
        "Precio": 125.28,
        "Tipo": "Aretes",
        "Imágenes":[ "../assets/serenesolitarie.png"] ,
        "Descripcion": "Lorem esse et culpa proident duis mollit nisi proident elit pariatur elit sit consectetur et do proident ea voluptate deserunt. Consequat dolore qui aute magna voluptate enim qui id cillum enim excepteur occaecat culpa deserunt eu.Culpa labore incididunt labore proident eu anim in." ,
        "Cantidad": 5 
    },
    {
        "ID" : 6,
        "Nombre" : "Timeless Halo Earrings",
        "Codigo": 78210,
        "Precio": 620.73,
        "Tipo": "Aretes",
        "Imágenes":[ "../assets/timelesshalo.png"] ,
        "Descripcion": "Lorem esse et culpa proident duis mollit nisi proident elit pariatur elit sit consectetur et do proident ea voluptate deserunt. Consequat dolore qui aute magna voluptate enim qui id cillum enim excepteur occaecat culpa deserunt eu.Culpa labore incididunt labore proident eu anim in." ,
        "Cantidad": 5 
    },
    {
        "ID" : 7,
        "Nombre" : "Exquisite Earrings",
        "Codigo": 78211,
        "Precio": 327.71,
        "Tipo": "Aretes",
        "Imágenes":[ "../assets/exquisite.png"] ,
        "Descripcion": "Lorem esse et culpa proident duis mollit nisi proident elit pariatur elit sit consectetur et do proident ea voluptate deserunt. Consequat dolore qui aute magna voluptate enim qui id cillum enim excepteur occaecat culpa deserunt eu.Culpa labore incididunt labore proident eu anim in." ,
        "Cantidad": 5 
    },
    {
        "ID" : 8,
        "Nombre" : "Timeless Elegance Ring",
        "Codigo": 78212,
        "Precio": 168.76,
        "Tipo": "Anillo",
        "Imágenes":[ "../assets/timelesselegancering.png"] ,
        "Descripcion": "Lorem esse et culpa proident duis mollit nisi proident elit pariatur elit sit consectetur et do proident ea voluptate deserunt. Consequat dolore qui aute magna voluptate enim qui id cillum enim excepteur occaecat culpa deserunt eu.Culpa labore incididunt labore proident eu anim in." ,
        "Cantidad": 5 
    },
    {
        "ID" : 9,
        "Nombre" : "Luxury Charms Ring",
        "Codigo": 78205,
        "Precio": 620.73,
        "Tipo": "Anillo",
        "Imágenes":[ "../assets/luxurycharms.png"] ,
        "Descripcion": "Lorem esse et culpa proident duis mollit nisi proident elit pariatur elit sit consectetur et do proident ea voluptate deserunt. Consequat dolore qui aute magna voluptate enim qui id cillum enim excepteur occaecat culpa deserunt eu.Culpa labore incididunt labore proident eu anim in." ,
        "Cantidad": 5 
    },
    {
        "ID" : 10,
        "Nombre" : "Blissful Bloom Ring",
        "Codigo": 78213,
        "Precio": 620.73,
        "Tipo": "Anillo",
        "Imágenes":[ "../assets/blissfulbloom.png"] ,
        "Descripcion": "Lorem esse et culpa proident duis mollit nisi proident elit pariatur elit sit consectetur et do proident ea voluptate deserunt. Consequat dolore qui aute magna voluptate enim qui id cillum enim excepteur occaecat culpa deserunt eu.Culpa labore incididunt labore proident eu anim in." ,
        "Cantidad": 5 
    },
    {
        "ID" : 11,
        "Nombre" : "Sparkling Ring",
        "Codigo": 78214,
        "Precio": 620.73,
        "Tipo": "Anillo",
        "Imágenes":[ "../assets/sparklingring.png"] ,
        "Descripcion": "Lorem esse et culpa proident duis mollit nisi proident elit pariatur elit sit consectetur et do proident ea voluptate deserunt. Consequat dolore qui aute magna voluptate enim qui id cillum enim excepteur occaecat culpa deserunt eu.Culpa labore incididunt labore proident eu anim in." ,
        "Cantidad": 5 
    },
    {
        "ID" : 13,
        "Nombre" : "Glimmering Ring",
        "Codigo": 782015,
        "Precio": 620.73,
        "Tipo": "Anillo",
        "Imágenes":[ "../assets/glimeringring.png"] ,
        "Descripcion": "Lorem esse et culpa proident duis mollit nisi proident elit pariatur elit sit consectetur et do proident ea voluptate deserunt. Consequat dolore qui aute magna voluptate enim qui id cillum enim excepteur occaecat culpa deserunt eu.Culpa labore incididunt labore proident eu anim in." ,
        "Cantidad": 5 
    },
]

// console.log(listaProductos)

// const agregarProductos = (ID, Nombre, Codigo, Precio, Tipo, Imágenes, Descripcion, Cantidad) => {
//     const existeCodigo = listaProductos.findIndex(item => item.Codigo === Codigo)
//     console.log("existe codigo", existeCodigo)
//     if(existeCodigo !== -1){
//     alert("ya existe un producto con este codigo")
//     }else {
//     const producto = {
//         ID,
//         Nombre,
//         Codigo,
//         Precio,
//         Tipo,
//         Imágenes,
//         Descripcion,
//         Cantidad
//     }
//     listaProductos.push(producto)
//     alert("Producto correctamente creado")
// }
// }

// //filtra por tipo
// const filtrarProductosTipo = (Tipo)=> {
//     const productosFiltrados = listaProductos.filter(
//         (item) => item.Tipo === Tipo);

//     console.log(productosFiltrados);

//     return productosFiltrados;
// }

// const tipoBuscado = "Anillo"; 
// const productosFiltrados = filtrarProductosTipo(tipoBuscado);


// //busqueda por nombre
// const nombreProducto = prompt("Por favor ingrese el nombre del producto");
// const productoEncontrado = listaProductos.find ((item) => item.Nombre === nombreProducto);
// if (productoEncontrado) {
//         console.log({... productoEncontrado});
//     }
// else{
//         console.log("No encontrado");
//     }



// //ordenar ascendente
// listaProductos.sort((a, b) => {
//     const precioA = a.Precio;
//     const precioB = b.Precio;

//     return precioA - precioB;
// });

// console.log({... listaProductos});

// //ordenar descendente
// listaProductos.sort((a, b) => {
//     const precioA = a.Precio;
//     const precioB = b.Precio;

//     return precioB - precioA;
// });

// console.log({... listaProductos});


// //total a pagar
// const totalAPagar = listaProductos.reduce((total, item) => total + item.Precio * item.Cantidad, 0);
// console.log (listaProductos,"Total A Pagar: $", totalAPagar);




//funcionalidad para los productos

const containerCards = document.getElementById("containerCards");

const printProducts = (container, listProducts) => {
    container.innerHTML = "";
    listProducts.forEach(element => {
        container.innerHTML += `
            <article class="card" data-click="card">
                <img src=${element.Imágenes[0]} alt=${element.Nombre} data-click="card">
                <h3 data-click="card">${element.Nombre}</h3>
                <span data-click="card">$${element.Precio}</span>
            </article>
        `;
    });
}


printProducts(containerCards, listaProductos);

document.addEventListener("click", (event) => {
    
    if (event.target.getAttribute("data-click") === "card") {        
        location.href = "/pages/productdetails.html";
    }
})