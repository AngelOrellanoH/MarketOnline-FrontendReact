import { ShoppingBag } from "lucide-react";

const CartEmpty = () => {
    return (
        <div className="text-center py-8">
            <ShoppingBag className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 font-medium">Tu cesta está vacía</p>
            <p className="text-sm text-gray-400">Agrega productos para comenzar</p>
        </div>
    )
}

export default CartEmpty;