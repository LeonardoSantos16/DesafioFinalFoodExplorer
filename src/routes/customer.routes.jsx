import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { DetailsPrate } from '../pages/DetailsPrate';
import { Navigate } from 'react-router-dom';
export function CustomerRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/details/:id" element={<DetailsPrate />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}