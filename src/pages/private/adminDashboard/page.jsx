import { useState } from "react";
import CategoryResumen from "@/components/adminDashboard/categoryResumen";
import AdminCategoria from "../adminCategoria/page";
import AdminProducto from "../adminProducto/page";
import Sidebar from "@/components/adminDashboard/sideBar";
import DashboardStats from "@/components/adminDashboard/dashboardStats";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { defaultCategorias, defaultProductos } from "@/data/defaultData";

const AdminDashboard = () => {

    const [productos, setProductos] = useLocalStorage("productos", defaultProductos);
    const [categorias, setCategorias] = useLocalStorage("categorias", defaultCategorias);
    const [activeTab, setActiveTab] = useState("dashboard");

    const categoriesWithProducts = categorias.map((cat) => ({
        ...cat,
        products: productos.filter((p) => p.idCategoria === cat.idCategoria),
    }));

    return (
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

                <div className="lg:col-span-3">
                    {activeTab === "dashboard" && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
                            <DashboardStats categories={categoriesWithProducts} />
                            <CategoryResumen categories={categoriesWithProducts} />
                        </div>
                    )}

                    {activeTab === "categories" && (
                        <AdminCategoria
                            categories={categorias}
                            setCategories={setCategorias}
                            productos={productos}
                            setProductos={setProductos}
                        />
                    )}

                    {activeTab === "products" && (
                        <AdminProducto
                            categories={categorias}
                            setCategories={setCategorias}
                            productos={productos}
                            setProductos={setProductos}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;