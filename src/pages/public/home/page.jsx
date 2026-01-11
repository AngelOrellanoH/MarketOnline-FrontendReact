import ProductList from "@/components/home/productList"
import ShoppingCart from "@/components/home/shoppingCart"
import { useViewCart } from "@/context/viewCartContext"
import { defaultCategorias, defaultProductos } from "@/data/defaultData"
import { useLocalStorage } from "@/hooks/useLocalStorage"

import { useState } from "react"


const Home = () => {

    const [categorias, setCategorias] = useLocalStorage("categorias", defaultCategorias)
    const [productos, setProductos] = useLocalStorage("productos", defaultProductos)
    const [cesta, setCesta] = useLocalStorage("cesta", [])
    const [orderConfirmed, setOrderConfirmed] = useState(false)
    const {viewCart} = useViewCart();

    const addToCart = (product) => {
        if (product.stock <= 0) return

        setCesta((prev) => {
            const exists = prev.find((item) => item.product.idProducto === product.idProducto);
            if (exists) {
                return prev.map((item) =>
                    item.product.idProducto === product.idProducto
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
                );
            } else {
                return [...prev, { product, cantidad: 1 }];
            }
        })

        setProductos((prev) =>
            prev.map((p) =>
                p.idProducto === product.idProducto ? { ...p, stock: p.stock - 1 } : p
            )
        )
    }

    const removeFromCart = (idProducto) => {
        const item = cesta.find((i) => i.product.idProducto === idProducto);
        if (!item) return

        setCesta((prev) =>
            prev
            .map((i) =>
                i.product.idProducto === idProducto
                ? { ...i, cantidad: i.cantidad - 1 }
                : i
            )
            .filter((i) => i.cantidad > 0)
        )

        setProductos((prev) =>
            prev.map((p) =>
            p.idProducto === idProducto ? { ...p, stock: p.stock + 1 } : p
            )
        )
    }

    const handleOrder = () => {
        if( window.confirm("¿Estás seguro de que quieres seguir con la orden?. Esta accion no es retornable")){
            setOrderConfirmed(true)
            setCesta([])
            setTimeout(() => setOrderConfirmed(false), 3000)
        }
    }

    const groupedByCategoria = categorias.map((categoria) => ({
        ...categoria,
        products: productos.filter((p) => p.idCategoria === categoria.idCategoria),
    }))

    return (
        <main className="flex-1 bg-gray-50 mx-0 ">
            <div className="mx-0 w-full px-4 sm:px-6 lg:px-8 py-8">
                <div
                    className={`grid gap-8 ${
                    viewCart ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-1"
                    }`}
                >
                    <div className={viewCart ? "lg:col-span-2" : "col-span-1"}>
                        <ProductList
                            categories={groupedByCategoria}
                            onAddToCart={addToCart}
                        />
                    </div>

                    {viewCart && (
                        <div className="lg:col-span-1">
                            <ShoppingCart
                                items={cesta}
                                onRemoveFromCart={removeFromCart}
                                onOrder={handleOrder}
                                orderConfirmed={orderConfirmed}
                            />
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

export default Home;