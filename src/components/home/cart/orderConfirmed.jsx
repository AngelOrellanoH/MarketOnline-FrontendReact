import { CheckCircle } from "lucide-react";

const OrderConfirmed = () => {
    return (
        <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
            <div className="text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">¡Pedido Confirmado!</h3>
                <p className="text-gray-600">Tu pedido ha sido procesado exitosamente.</p>
            </div>
    </div>
    )
}
  
export default OrderConfirmed;