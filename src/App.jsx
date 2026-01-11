import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/public/home/page";
import MainLayout from "./layout/mainLayout";
import Login from "./pages/public/login/page";
import AdminDashboard from "./pages/private/adminDashboard/page";
import PrivateRoute from "./components/privateRoute";
import { AuthProvider } from "./context/authContext";
import { CartProvider } from "./context/viewCartContext";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/admin", element: <PrivateRoute> <AdminDashboard /> </PrivateRoute> }
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />;
      </CartProvider>
    </AuthProvider>
  )
}

export default App;