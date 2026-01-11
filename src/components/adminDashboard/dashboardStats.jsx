import { Card, CardContent } from "@/components/ui/card";
import { FolderOpen, Package, BarChart3 } from "lucide-react";

const DashboardStats = ({ categories }) => {
    const totalProducts = categories.reduce((sum, cat) => sum + cat.products.length, 0);
    const totalStock = categories.reduce(
        (sum, cat) => sum + cat.products.reduce((pSum, p) => pSum + p.stock, 0),
        0
    )

    const stats = [
        {
            label: "Categorías",
            value: categories.length,
            icon: <FolderOpen className="h-8 w-8 text-blue-600" />,
        },
        {
            label: "Productos",
            value: totalProducts,
            icon: <Package className="h-8 w-8 text-green-600" />,
        },
        {
            label: "Stock Total",
            value: totalStock,
            icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
        }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ label, value, icon }, i) => (
                <Card key={i}>
                    <CardContent className="p-6">
                        <div className="flex items-center">
                        {icon}
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">{label}</p>
                                <p className="text-2xl font-semibold text-gray-900">{value}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default DashboardStats;