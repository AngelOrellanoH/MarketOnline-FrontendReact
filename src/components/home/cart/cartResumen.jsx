const CartResumen = ({ total, onOrder }) => {
    return (
        <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-900">Total:</span>
                <span className="text-2xl font-bold text-green-600">€{total.toFixed(2)}</span>
            </div>
            <button
                type="button"
                onClick={onOrder}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
                Realizar Pedido
            </button>
        </div>
    )
}

export default CartResumen;
