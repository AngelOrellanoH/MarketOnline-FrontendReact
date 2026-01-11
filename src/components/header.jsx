// Importaciones de los iconos y componentes
import { ShoppingBag, Settings, Eye, EyeOff, LogOut } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button";
 import { useAuth } from "@/context/authContext";
import { useViewCart } from "@/context/viewCartContext";

// Componente Header que funcionara como cabecera de la pagina principal (para el publico)
const Header = () => {

  const { user, logout } = useAuth();
  const {viewCart, onToggleCart} = useViewCart();
  

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="w-full mx-0 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to={user ? "/admin" : "/"} className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center">
              <ShoppingBag className="inline-block mr-2 h-6 w-6" />
              Market Online
            </h1>
          </Link>

          <div className="flex items-center space-x-4">
            {!user &&
                <Button variant="outline" onClick={onToggleCart } className="flex items-center space-x-2">
                  {viewCart ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  <span className="hidden sm:inline">{viewCart ? "Ocultar" : "Mostrar"} Cesta</span>
                </Button>
            }
            {!user && 
                <Link to="/login">
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Settings className="h-4 w-4" />
                    <span className="hidden sm:inline">Admin</span>
                  </Button>
                </Link>
            }
            {user &&
                <Button variant="outline" className="flex items-center space-x-2" onClick={logout}>
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">Cerrar Sesión</span>
                </Button>
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;