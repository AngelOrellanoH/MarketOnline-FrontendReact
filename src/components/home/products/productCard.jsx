import AddProductCart from "./addProductCart";
import AllPhotos from "./allPhotos";
import ProductInfo from "./productInfo";

const ProductCard = ({ product, onAddToCart }) => {
    const isOutOfStock = product.stock <= 0;

    return (
        <div className="bg-gray-50 rounded-lg p-4 border transition-all duration-200 hover:shadow-md">
            <div className="flex space-x-4">
                <AllPhotos
                    images={product.images}
                    alt={product.name}
                    isOutOfStock={isOutOfStock}
                />

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <ProductInfo product={product} />
                    <div className="mt-4">
                        <AddProductCart
                            onClick={() => onAddToCart(product)}
                            disabled={isOutOfStock}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;