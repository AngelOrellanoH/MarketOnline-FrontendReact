import { Package } from "lucide-react";

const ProductInfo = ({ product }) => {
  return (
        <>
            <h4 className="font-semibold text-gray-900 truncate">{product.nombre}</h4>
            <p className="text-sm text-gray-600 mb-1">Código: {product.idProducto}</p>
            <p className="text-sm text-gray-700 mb-2 line-clamp-2">{product.descripcion}</p>
            <div className="flex items-center justify-between">
                <div>
                <p className="text-lg font-bold text-green-600">€{product.precio.toFixed(2)}</p>
                    <div className="flex items-center text-sm text-gray-500">
                        <Package className="h-4 w-4 mr-1" />
                        <span>Stock: {product.stock}</span>
                    </div>
                </div>
            </div>  
        </>
  );
}

export default ProductInfo;