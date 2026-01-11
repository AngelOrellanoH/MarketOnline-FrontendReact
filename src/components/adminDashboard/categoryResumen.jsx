import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CategoryResumen = ({ categories }) => {
     return (
        <Card>
            <CardHeader>
                <CardTitle>Resumen por Categorías</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {categories.map((cat) => {
                        const stock = cat.products.reduce((sum, p) => sum + p.stock, 0);

                        return (
                            <div
                                key={cat.idCategoria}
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                            >
                                <div>
                                    <h4 className="font-medium text-gray-900">{cat.nombre}</h4>
                                    <p className="text-sm text-gray-600">
                                        {cat.products.length} productos
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-medium text-gray-900">Stock: {stock}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </CardContent>
        </Card>
    );
}

export default CategoryResumen;