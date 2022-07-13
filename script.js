class Producto {
    constructor(nombre = "Predeterminado", genero = "Predeterminado", edad = "Predeterminado", color = "Predeterminado", precio = 1, stock = 1) {
        this.nombre = nombre
        this.genero = genero
        this.edad = edad
        this.color = color
        this.precio = precio
        this.stock = stock
    }
}

const producto1 = new Producto("Toro", "Hombre", "Adultos", "negro", 950, 50)
const producto2 = new Producto("Pantera", "Mujer", "Adultos", "negro", 900, 50)
const producto3 = new Producto("Leona", "Mujer", "Adultos", "rojo", 900, 50)
const producto4 = new Producto("Agila", "Hombre", "Adultos", "rojo", 950, 50)
const producto5 = new Producto("Tigre", "Hombre", "Niños", "azul", 750, 50)
const producto6 = new Producto("Chita", "Mujer", "Niños", "rosa", 700, 50)
const producto7 = new Producto("Pantera", "Unisex", "Niños", "verde", 600, 50)
const producto8 = new Producto("Iguana", "Unisex", "Niños", "verde", 750, 50)
const producto9 = new Producto("Ave", "Unisex", "Niños", "blanco", 500, 50)
const producto10 = new Producto("Jaguar", "Unisex", "Niños", "negro", 500, 50)
const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10]

function buscarProducto(productos) {
    let colorProducto = prompt(`Ingrese un color del protector
(Negro, Blanco, Rojo, Azul, Rosa, Verde)`).toLowerCase()

    let productoBuscado = productos.filter ((producto) => producto.color == colorProducto)
    
    if((colorProducto == "") || (colorProducto != productos.color)) {
    alert("NO existe ese color")
    } else {
    console.log(productoBuscado)
    }
}

function buscarProductos(productos) {
    let precio = parseFloat(prompt("Ingrese un precio"))
    let productosBuscados = productos.filter(producto => producto.precio >= precio)

    if(productosBuscados.length == 0){
        console.log("No hay productos con dichas caracteristicas")
    } else {
        console.log(productosBuscados)
    }
} 
function ordenarProductos(productos) {

    let metodoOrdenamiento = parseInt(prompt(`Ingrese:
1 para ordenar de MENOR a MAYOR precio
2 para ordenar de MAYOR a MENOR precio`))

    if(metodoOrdenamiento === 1) {
        console.log(productos.sort((a,b) => a.precio-b.precio))
    } else if(metodoOrdenamiento === 2) {
        console.log(productos.sort((a,b) => b.precio-a.precio))
    }
    
}

do {
    respuesta = parseInt(prompt(`Buscar su protector deportivo, ingrese:
1- Para buscar por color de protector deportivo
2- Buscar por base de precio de protector deportivo
3- Ordenar protectores deportivos de menor a mayor precio`))
} while(respuesta <1 || respuesta >3)

switch(respuesta) {
    case 1:
        buscarProducto(productos)
        break
    case 2:
        buscarProductos(productos)
        break
    case 3:
        ordenarProductos(productos)
        break
    default:
        alert("Opcion no valida")
        break
}