import { ShoppingBag } from "lucide-react";
import OrderConfirmed from "./cart/orderConfirmed";
import CartEmpty from "./cart/cartEmpty";
import CartItem from "./cart/cartItem";
import CartResumen from "./cart/cartResumen";

const ShoppingCart = ({ items, onRemoveFromCart, onOrder, orderConfirmed }) => {
    const total = items.reduce((sum, item) => sum + item.product.precio * item.cantidad, 0);

    if (orderConfirmed) {
        return <OrderConfirmed />;
    }

    return (
        <div className="bg-white rounded-lg shadow-sm border sticky top-24">
            <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Cesta de Compra
                </h2>
            </div>

            <div className="p-6">
                {items.length === 0 ? (
                    <CartEmpty />
                ) : (
                    <div className="space-y-4">
                        {items.map((item) => (
                        <CartItem key={item.product.idProducto} item={item} onRemoveFromCart={onRemoveFromCart} />
                        ))}

                        <CartResumen total={total} onOrder={onOrder} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ShoppingCart;