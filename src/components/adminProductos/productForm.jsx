import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Upload, Plus, X } from "lucide-react";

const ProductForm = ({ categories, newProduct, setNewProduct, onAddProduct, onUploadImage, isUploading, feedback }) => {
    
    const handleRemoveImage = (index) => {
        const newImages = newProduct.images.filter((_, i) => i !== index);
        setNewProduct({ ...newProduct, images: newImages });
    };

    return (
    <Card>
        <CardHeader>
            <CardTitle className="flex items-center">
                <Plus className="h-5 w-5 mr-2" />
                Agregar Nuevo Producto
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex-1 flex flex-col space-y-4">
                    <Label>Categoría</Label>
                    <Select value={newProduct.idCategoria} onValueChange={(val) => setNewProduct({ ...newProduct, idCategoria: val })}>
                        <SelectTrigger className="w-full"><SelectValue placeholder="Selecciona una categoría" /></SelectTrigger>
                        <SelectContent>
                            {categories.map((c) => (
                                <SelectItem key={c.idCategoria} value={c.idCategoria}>{c.nombre}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex-1 flex flex-col space-y-4">
                    <Label>Código</Label>
                    <Input value={newProduct.idProducto} onChange={(e) => setNewProduct({ ...newProduct, idProducto: e.target.value })} />
                </div>
            </div>

            <Label>Nombre del Producto</Label>
            <Input value={newProduct.nombre} onChange={(e) => setNewProduct({ ...newProduct, nombre: e.target.value })} />

            <Label>Descripción</Label>
            <Textarea className="resize-none" value={newProduct.descripcion} onChange={(e) => setNewProduct({ ...newProduct, descripcion: e.target.value })} />

            <div className="grid grid-cols-2 gap-4">
            <div className="flex-1 flex flex-col space-y-4">
                <Label>Precio</Label>
                <Input type="number" value={newProduct.precio} onChange={(e) => setNewProduct({ ...newProduct, precio: e.target.value })} />
            </div>
            <div className="flex-1 flex flex-col space-y-4">
                <Label>Stock</Label>
                <Input type="number" value={newProduct.stock} onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })} />
            </div>
            </div>

            <Label>Imágenes</Label>
            <div className="flex items-center space-x-2">
                <Input type="file" id="productImages" multiple accept="image/*" onChange={onUploadImage} className="hidden" />
                <Button type="button" variant="outline" onClick={() => document.getElementById("productImages").click()}>
                    <Upload className="h-4 w-4" /> {isUploading ? "Subiendo imágenes..." : "Subir Imágenes"}
                </Button>
                <span className="text-sm text-gray-500">{newProduct.images.length} imagen(es) seleccionada(s)</span>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
                {newProduct.images.map((imgSrc, index) => (
                    <div key={index} className="relative w-40 h-40 rounded overflow-hidden border border-gray-300">
                        <img src={imgSrc} alt={`preview-${index}`} className="object-cover w-fit h-fit" />
                        <button
                            type="button"
                            onClick={() => handleRemoveImage(index)}
                            className="absolute top-0 right-0 bg-black bg-opacity-50 text-white rounded-bl px-1"
                            aria-label="Eliminar imagen"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
            {feedback && (
                <div className={`text-sm mt-2 ${feedback.result === "exitoso" ? "text-green-600" : "text-red-600"}`}>
                    {feedback.descripcion}
                </div>
            )}
            <Button className="w-full" onClick={onAddProduct}>Agregar Producto</Button>
        </CardContent>
    </Card>
  );
}

export default ProductForm;