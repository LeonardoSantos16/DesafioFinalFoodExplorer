import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const myContext = createContext({});


function AuthenticatorProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password }, { withCredentials: true });
            const { user } = response.data;
            localStorage.setItem("@desafiofinal:user", JSON.stringify(user));

            setData({ user });
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
        setData({});
    }


    useEffect(() => {
        const user = localStorage.getItem("@desafiofinal:user");

        if (user) {
            setData({
                user: JSON.parse(user)
            })
        }
    }, [])

    return (
        <myContext.Provider value={{ signIn, signOut, user: data.user }}>
            {children} { }
        </myContext.Provider>
    );
}

function useAuth() {
    const context = useContext(myContext);
    return context
}

export { AuthenticatorProvider, useAuth }