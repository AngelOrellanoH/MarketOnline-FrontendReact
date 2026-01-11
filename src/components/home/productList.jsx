import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import ProductCard from "./products/productCard"


const ProductList = ({ categories, onAddToCart }) => {

    const [expandedCategories, setExpandedCategories] = useState(
        new Set(categories.map((cat) => cat.idCategoria))
    )

    const toggleCategory = (idCategoria) => {
        setExpandedCategories((prev) => {
            const newSet = new Set(prev)
            if (newSet.has(idCategoria)) {
                newSet.delete(idCategoria)
            } else {
                newSet.add(idCategoria)
            }
            return newSet
        })
    }

    return (
        <div className="space-y-6" id="productos">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Productos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Descubre nuestra amplia selección de productos de alta calidad organizados por categorías
            </p>
        </div>

        {categories.map((category) => (
            <div key={category.idCategoria} className="bg-white rounded-lg shadow-sm border">
                <button
                    onClick={() => toggleCategory(category.idCategoria)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                    <div className="flex items-center">
                        <h3 className="text-xl font-semibold text-gray-800">{category.nombre}</h3>
                        <span className="ml-3 text-sm text-gray-500">
                            ({category.products?.length || 0} productos)
                        </span>
                    </div>
                    {expandedCategories.has(category.idCategoria) ? (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                    ) : (
                        <ChevronRight className="h-5 w-5 text-gray-500" />
                    )}
                </button>

                <div
                    className={`transition-all duration-1000 ease-in-out ${
                    expandedCategories.has(category.idCategoria)
                        ? "max-h-[2000px] opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                >
                    <div className="px-6 pb-6">
                        {category.products?.length === 0 ? (
                            <div className="text-center py-8 text-gray-500">
                                <p>No hay productos en esta categoría</p>
                                <p className="text-sm">Los productos aparecerán aquí cuando se agreguen</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {category.products.map((product) => (
                                    <ProductCard
                                        key={product.idProducto}
                                        product={product}
                                        onAddToCart={onAddToCart}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
}

export default ProductList;
