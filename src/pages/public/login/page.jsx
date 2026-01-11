import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, ArrowLeft, AlertCircle } from "lucide-react"
import { useAuth } from "@/context/authContext"

const Login = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        await new Promise((resolve) => setTimeout(resolve, 500))

        if (password !== "123456") {
            setError("Contraseña incorrecta")
            setPassword("")
            setIsLoading(false)
        }else{
            setIsLoading(false)
            login({ username: "administrador" });
            navigate("/admin")
        }

        setIsLoading(false)
    }
    return (
        <div className="flex-1 bg-gray-50 flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                            Volver a la tienda
                    </Link>
                </div>

                <Card>
                    <CardHeader className="text-center">
                        <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <Lock className="h-6 w-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-2xl">Panel de Administración</CardTitle>
                        <p className="text-gray-600">Ingresa la contraseña para continuar</p>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex flex-col space-y-4">
                                <Label htmlFor="password">Contraseña</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Ingresa la contraseña"
                                    required
                                    className={error ? "border-red-500" : ""}
                                />
                            </div>

                            {error && (
                                <div className="flex items-center space-x-2 text-red-600 text-sm">
                                    <AlertCircle className="h-4 w-4" />
                                    <span>{error}</span>
                                </div>
                            )}

                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? "Verificando..." : "Ingresar"}
                            </Button>
                        </form>

                        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                            <p className="text-sm text-blue-800">
                                <strong>Pista:</strong> La contraseña es 123456
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Login;


