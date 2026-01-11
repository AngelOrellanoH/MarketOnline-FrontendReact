
import ProductForm from "@/components/adminProductos/productForm";
import ProductList from "@/components/adminProductos/productList";

import { useState } from "react";


const AdminProducto = ({ categories, productos, setProductos }) => {

     const [newProduct, setNewProduct] = useState({
        idProducto: "",
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
        idCategoria: "",
        images: []
    })

    const [feedback, setFeedback] = useState(null);

    const [selectedCategory, setSelectedCategory] = useState("all");

    const [isUploading, setIsUploading] = useState(false);

    const handleUpload = (e) => {
        const files = e.target.files;
        if (!files) return;
        setIsUploading(true)
        Array.from(files).forEach((file) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                setNewProduct((prev) => ({ ...prev, images: [...prev.images, e.target.result] }));
            };
            reader.readAsDataURL(file);
            setIsUploading(false);
        });
    };

    const handleAddProduct = () => {
        const { idProducto, nombre, idCategoria, precio, stock, images } = newProduct;
        if (!nombre || !idProducto || !idCategoria || !precio || !stock || images.length == 0) {
            
            setFeedback({ result: "fallido", descripcion: "Todos los campos obligatorios deben estar llenos." });
            return;
        }
        if (productos.find((pro) => pro.idProducto == idProducto)) {
            setFeedback({ result: "fallido", descripcion: "El id del Producto debe ser unico." });
            return;
        }
        const newItem = {
            ...newProduct,
            precio: parseFloat(precio),
            stock: parseInt(stock),
            images: newProduct.images.length > 0 ? newProduct.images : ["/placeholder.svg"]
        };

        setProductos([...productos, newItem]);
        setNewProduct({
            idProducto: "",
            nombre: "",
            descripcion: "",
            precio: "",
            stock: "",
            idCategoria: "",
            images: []
        });
        setFeedback({ result: "exitoso", descripcion: "Producto agregado correctamente." });
    };

    const handleDeleteProduct = (idProducto) => {
        if (confirm("¿Estás seguro de eliminar este producto?")) {
            setProductos(productos.filter((p) => p.idProducto !== idProducto));
        }
    };

    const filteredProducts =
        selectedCategory === "all"
        ? productos
        : productos.filter((p) => p.idCategoria == selectedCategory);

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Gestión de Productos</h2>
            <ProductForm
                categories={categories}
                newProduct={newProduct}
                setNewProduct={setNewProduct}
                onAddProduct={handleAddProduct}
                onUploadImage={handleUpload}
                isUploading={isUploading}
                feedback = {feedback}
            />
            <ProductList
                products={filteredProducts}
                onDelete={handleDeleteProduct}
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
        </div>
    );
}

export default AdminProducto;
