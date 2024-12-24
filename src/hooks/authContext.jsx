import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const myContext = createContext({});


function AuthenticatorProvider({ children }) {
    const [data, setData] = useState({});
    const [isAdmin, setIsAdmin] = useState();
    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;
            setIsAdmin(user.role == 'admin')
            localStorage.setItem("@desafiofinal:user", JSON.stringify(user));
            localStorage.setItem("@desafiofinal:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ user, token });
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar");
            }
        }
    }

    async function signOut() {
        localStorage.removeItem('@desafiofinal:user');
        localStorage.removeItem('@desafiofinal:token')
        setData({});
    }
  

    useEffect(() => {
        const user = localStorage.getItem("@desafiofinal:user");
        const token = localStorage.getItem("@desafiofinal:token");
        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const parsedUser = JSON.parse(user);
            setData({ token, user: parsedUser });
            setIsAdmin(parsedUser.role === 'admin'); 
        }
    }, []);

    return (
        <myContext.Provider value={{ signIn, signOut, user: data.user, isAdmin }}>
            {children} { }
        </myContext.Provider>
    );
}

function useAuth() {
    const context = useContext(myContext);
    return context
}

export { AuthenticatorProvider, useAuth }