import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const AddCategoryForm = ({ onAdd, feedback }) => {
    const [newCategoryName, setNewCategoryName] = useState("");

    const handleSubmit = () => {
        if (newCategoryName.trim()) {
            onAdd(newCategoryName.trim());
            setNewCategoryName("");
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center">
                    <Plus className="h-5 w-5 mr-2" />
                    Agregar Nueva Categoría
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex space-x-4">
                    <div className="flex-1 flex flex-col space-y-4">
                        <Label htmlFor="categoryName">Nombre de la Categoría</Label>
                        <Input
                            id="categoryName"
                            value={newCategoryName}
                            onChange={(e) => setNewCategoryName(e.target.value)}
                            placeholder="Ej: Electrónicos"
                            onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                        />
                    </div>

                    <div className="flex items-end">
                        <Button onClick={handleSubmit} disabled={!newCategoryName.trim()}>
                            Agregar
                        </Button>
                    </div>
                </div>
                {feedback && (
                    <div className={`text-sm mt-2 ${feedback.result === "exitoso" ? "text-green-600" : "text-red-600"}`}>
                        {feedback.descripcion}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

export default AddCategoryForm;