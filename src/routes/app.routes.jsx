import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { CreatePrate } from "../pages/CreatePrate";
import { DetailsPrate } from "../pages/DetailsPrate";
import { UpdatePrate } from "../pages/UploadPrate";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<CreatePrate />} />
            <Route path="/details/:id" element={<DetailsPrate />} />
            <Route path="/update/:id" element={<UpdatePrate />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}