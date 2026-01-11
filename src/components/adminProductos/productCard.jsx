import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Edit, Trash2 } from "lucide-react";

const ProductCard = ({ product, onDelete, categorie }) => {
  
    return (
        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <img src={product.images[0] || "/placeholder.svg"} alt={product.nombre} width={80} height={80} className="rounded object-cover" />
            <div className="flex-1">
                <div className="flex items-start justify-between">
                    <div>
                        <h4 className="font-medium text-gray-900">{product.nombre}</h4>
                        <p className="text-sm text-gray-600">Código: {product.idProducto}</p>
                        <p className="text-sm text-gray-600">Categoría: {categorie.nombre}</p>
                        <div className="flex items-center space-x-4 mt-2">
                        <Badge variant="secondary">€{product.precio.toFixed(2)}</Badge>
                        <Badge variant={product.stock > 0 ? "default" : "destructive"}>Stock: {product.stock}</Badge>
                        </div>
                    </div>
                    <div className="flex space-x-2 self-center">
                        <Button size="sm" variant="destructive" onClick={() => onDelete(product.idProducto)}><Trash2 className="h-4 w-4" /></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;