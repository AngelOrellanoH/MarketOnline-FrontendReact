// Datos por defecto para las categorias y los productos
export const defaultCategorias = [
  { idCategoria: 1, nombre: "Computadoras" },
  { idCategoria: 2, nombre: "Accesorios" },
  { idCategoria: 3, nombre: "Monitores" },
]

export const defaultProductos = [
  {
    idProducto: 101,
    nombre: "Laptop Gamer",
    descripcion: "Laptop con procesador Intel i7 y tarjeta gráfica RTX 3060.",
    precio: 1500.0,
    stock: 10,
    images: ["/producto1.jpg","/producto2.webp","/producto3.jpg"],
    idCategoria: 1,
  },
  {
    idProducto: 102,
    nombre: "Mouse Inalámbrico",
    descripcion: "Mouse ergonómico con batería recargable.",
    precio: 50.0,
    stock: 25,
    images: ["/producto2.webp"],
    idCategoria: 2,
  },
  {
    idProducto: 103,
    nombre: "Teclado Mecánico RGB",
    descripcion: "Teclado mecánico con switches rojos y retroiluminación RGB.",
    precio: 80.0,
    stock: 15,
    images: ["/producto3.jpg"],
    idCategoria: 2,
  },
  {
    idProducto: 104,
    nombre: "Monitor 4K 27 pulgadas",
    descripcion: "Monitor UHD con tecnología IPS y tasa de refresco de 144Hz.",
    precio: 350.0,
    stock: 8,
    images: ["/producto4.jpg"],
    idCategoria: 3,
  },
]
