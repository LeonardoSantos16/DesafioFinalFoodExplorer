import { Brand } from "../../components/brand"
import { Button } from "../../components/button"
import { Input } from "../../components/input"
import { Container, SignContent, FormSign, FormCamp } from "./styles"
import logo_cake from '../../assets/logo_cake.svg'
import { useTheme } from "styled-components"
import useMobile from "../../hooks/useMobile"
import { useState } from "react"
import { api } from "../../services/api"
import { Link, useNavigate } from "react-router-dom"
export function SignUp() {
    const theme = useTheme();
    const isMobile = useMobile()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSignUp() {
        const user = {
            name,
            email,
            password
        }

        api.post("/users", user).then(() => {
            alert("Usuário cadastrado com sucesso! ")
            navigate("/");
        }).catch(error => {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível cadastrar")
            }
        })
    }

    return (
        <Container>
            <SignContent>
                <Brand
                    gap='10px'
                    logo={logo_cake}
                    sizelogo='43px'
                    styletext={theme.fonts.robotoBoldBig2}
                    corbrand={theme.COLORS.LIGHT_100}
                />
                <FormSign>
                    {!isMobile && <h1>Crie sua conta</h1>
                    }
                    <FormCamp>
                        <h3>Seu nome</h3>
                        <Input
                            backgroundcolor={theme.COLORS.DARK_900}
                            borderradius="8px"
                            placeholder="Exemplo: Maria da Silva"
                            type="text"
                            onChange={e => setName(e.target.value)}
                        />
                    </FormCamp>
                    <FormCamp>
                        <h3>Email</h3>
                        <Input
                            backgroundcolor={theme.COLORS.DARK_900}
                            borderradius="8px"
                            placeholder="Exemplo: exemplo@exemplo.com.br"
                            type="email"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </FormCamp>

                    <FormCamp>
                        <h3>Senha</h3>
                        <Input
                            backgroundcolor={theme.COLORS.DARK_900}
                            borderradius="8px"
                            placeholder="No mínimo 6 caracteres"
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </FormCamp>
                    <Button
                        color={theme.COLORS.TINTS_TOMATO_100}
                        text="Criar conta"
                        onClick={handleSignUp}
                    />

                    <a href="/">Já tenho uma conta</a>
                </FormSign>

            </SignContent>


        </Container>
    )
}