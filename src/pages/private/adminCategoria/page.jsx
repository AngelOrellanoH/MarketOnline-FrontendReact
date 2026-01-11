import AddCategoryForm from "@/components/adminCategoria/addCategoryForm";
import { FolderOpen } from "lucide-react";
import CategoryItem from "@/components/adminCategoria/categoryItem";
import { Card ,CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import { useState } from "react";

const AdminCategoria = ({ categories, setCategories, setProductos, productos }) => {
    
    const [feedback, setFeedback] = useState(null);

    const handleAddCategory = (name) => {
        if(categories.find((cat) => cat.nombre.toLowerCase() == name.toLowerCase())){
            setFeedback({ result: "fallido", descripcion: "Ya existe una categoria con ese nombre." })
            return
        }
        const maxId = categories.length > 0 
            ? Math.max(...categories.map((cat) => cat.idCategoria)) 
            : 0;

        const newCategory = {
            idCategoria: maxId + 1,
            nombre: name,
        };

        setCategories([...categories, newCategory]);
        setFeedback({ result: "exitoso", descripcion: "Categoria agregada correctamente." });
    };

    const handleDeleteCategory = (id) => {
        setCategories(categories.filter((cat) => cat.idCategoria !== id));
        setProductos(productos.filter((pro) => pro.idCategoria !== id));
    };

    const handleEditCategory = (id, newName) => {
        setCategories(categories.map((cat) => (cat.idCategoria === id ? { ...cat, nombre: newName } : cat)));
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Gestión de Categorías</h2>
            </div>

            <AddCategoryForm feedback={feedback} onAdd={handleAddCategory} />

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <FolderOpen className="h-5 w-5 mr-2" />
                        Categorías Existentes ({categories.length})
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {categories.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                            <FolderOpen className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                            <p>No hay categorías creadas</p>
                            <p className="text-sm">Agrega tu primera categoría arriba</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {categories.map((category) => (
                                <CategoryItem
                                    key={category.idCategoria}
                                    category={category}
                                    onDelete={handleDeleteCategory}
                                    onEdit={handleEditCategory}
                                />
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

export default AdminCategoria;