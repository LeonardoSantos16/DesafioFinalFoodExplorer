import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/authContext";
import { USER_ROLE } from "../utils/roles";
import { CustomerRoutes } from "./customer.routes";
export function Routes() {
    const { user } = useAuth();

    function AccessRoute() {
        switch (user.role) {
            case USER_ROLE.ADMIN:
                return <AppRoutes />
            case USER_ROLE.CUSTOMER:
                return <CustomerRoutes />
            default:
                return <CustomerRoutes />
        }
    }
    return (
        <BrowserRouter>
            {user ? <AccessRoute /> : <AuthRoutes />}
        </BrowserRouter>
    )
}