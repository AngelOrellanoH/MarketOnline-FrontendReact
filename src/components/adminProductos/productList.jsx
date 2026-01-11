import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Package } from "lucide-react";
import ProductCard from "./productCard";

const ProductList = ({ products, onDelete, categories, selectedCategory, setSelectedCategory }) => {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center"><Package className="h-5 w-5 mr-2" /> Productos Existentes</CardTitle>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="categoryFilter">Filtrar por categoría:</label>
                        <select className="border rounded px-2 py-1" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                            <option value="all">Todas las categorías</option>
                                {categories.map((c) => (
                                    <option key={c.idCategoria} value={c.idCategoria}>{c.nombre}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                {products.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                        <Package className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                        <p>No hay productos en esta categoría</p>
                    </div>
                    ) : (
                    <div className="space-y-4">
                        {products.map((product) => (
                            <ProductCard key={product.idProducto} product={product} onDelete={onDelete} categorie={categories.find(c => c.idCategoria == product.idCategoria)} />
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

export default ProductList;