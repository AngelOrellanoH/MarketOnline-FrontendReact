import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FolderOpen, Trash2, Edit } from "lucide-react";

const CategoryItem = ({ category, onDelete, onEdit }) => {
    const [editingName, setEditingName] = useState(category.nombre);
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = () => {
        if (editingName.trim() && editingName !== category.nombre) {
            onEdit(category.idCategoria, editingName.trim());
        }
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSave();
        }
        if (e.key === "Escape") {
            setIsEditing(false);
            setEditingName(category.nombre);
        }
    };

    return (
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
                <FolderOpen className="h-5 w-5 text-blue-600" />
                {isEditing ? (
                    <div className="flex space-x-2">
                        <Input
                            value={editingName}
                            onChange={(e) => setEditingName(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="w-48"
                            autoFocus
                        />
                        <Button size="sm" onClick={handleSave}>
                            Guardar
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => setIsEditing(false)}>
                            Cancelar
                        </Button>
                    </div>
                    ) : (
                    <>
                        <div>
                            <h4 className="font-medium text-gray-900">{category.nombre}</h4>
                        </div>
                    </>
                )}
            </div>

            {!isEditing && (
                <div className="flex space-x-2">
                    <Button size="sm" variant="outline" onClick={() => setIsEditing(true)}>
                        <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => {
                        if (
                            window.confirm(
                            "¿Estás seguro de que quieres eliminar esta categoría? Se eliminarán todos sus productos."
                            )
                        ) {
                            onDelete(category.idCategoria);
                        }
                        }}
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
            )}
        </div>
    );
}

export default CategoryItem;