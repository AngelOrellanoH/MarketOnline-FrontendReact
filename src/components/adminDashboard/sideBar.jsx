import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutDashboard, Package, FolderOpen } from "lucide-react";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "categories", label: "Gestión de Categorías", icon: FolderOpen },
  { id: "products", label: "Gestión de Productos", icon: Package },
];

const Sidebar = ({ activeTab, setActiveTab }) => {
    return (
        <div className="lg:col-span-1">
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Menú de Administración</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <nav className="space-y-1">
                        {menuItems.map(({ id, label, icon: Icon }) => (
                            <Button
                                key={id}
                                variant={activeTab === id ? "default" : "ghost"}
                                onClick={() => setActiveTab(id)}
                                className="w-full justify-start"
                            >
                                <Icon className="h-5 w-5 mr-3" />
                                {label}
                            </Button>
                        ))}
                    </nav>
                </CardContent>
            </Card>
        </div>
    );
}

export default Sidebar;