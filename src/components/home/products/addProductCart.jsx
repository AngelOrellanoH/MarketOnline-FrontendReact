import { ShoppingCart } from "lucide-react";

const AddProductCart = ({ disabled, onClick }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center space-x-1 px-3 py-1 rounded bg-green-600 text-white text-sm transition-opacity ${
                disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700"
            }`}
        >
            <ShoppingCart className="h-4 w-4" />
            <span>Agregar</span>
        </button>
    );
}

export default AddProductCart;