import { Trash2 } from "lucide-react";

const CartItem = ({ item, onRemoveFromCart }) => {

    const { product, cantidad } = item;

    return (
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <img
                src={product.images[0] || "/placeholder.svg"}
                alt={product.nombre}
                width={60}
                height={60}
                className="rounded object-cover"
            />
            <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 truncate">{product.nombre}</h4>
                <p className="text-sm text-gray-600">Código: {product.idProducto}</p>
                <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center space-x-2">
                        <span className="badge badge-secondary">Cantidad: {cantidad}</span>
                        <span className="text-sm font-medium text-green-600">
                        €{(product.precio * cantidad).toFixed(2)}
                        </span>
                    </div>
                    <button
                        type="button"
                        onClick={() => onRemoveFromCart(product.idProducto)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 p-1 rounded"
                        aria-label={`Eliminar ${product.nombre} del carrito`}
                    >
                        <Trash2 className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );

}

export default CartItem;