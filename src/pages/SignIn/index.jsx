import { Brand } from "../../components/brand"
import { Button } from "../../components/button"
import { Input } from "../../components/input"
import { Container, SignContent, FormSign, FormCamp } from "./styles"
import logo_cake from '../../assets/logo_cake.svg'
import { useTheme } from "styled-components"
import useMobile from "../../hooks/useMobile"
import { useAuth } from "../../hooks/authContext"
import { Link } from "react-router-dom"
import { useState } from "react"
export function SignIn() {
    const theme = useTheme();
    const isMobile = useMobile()
    // TODO: mudar a cor do input e borda
    // TODO: retirar o event.preventDefault()
    const { signIn } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignIn() {
        event.preventDefault();
        signIn({ email, password })
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
                    {!isMobile && <h1>Faça login</h1>}
                    <FormCamp>
                        <h3>Email</h3>
                        <Input
                            backgroundcolor={theme.COLORS.DARK_900}
                            borderradius="8px"
                            type="email"
                            placeholder="Exemplo: exemplo@exemplo.com.br"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </FormCamp>

                    <FormCamp>
                        <h3>Senha</h3>
                        <Input
                            backgroundcolor={theme.COLORS.DARK_900}
                            borderradius="8px"
                            type="password"
                            placeholder="No mínimo 6 caracteres"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </FormCamp>
                    <Button
                        bgColor={theme.COLORS.TINTS_TOMATO_100}
                        text="Entrar"
                        onClick={handleSignIn}
                    />

                    <Link to="/register">Criar conta</Link>
                </FormSign>

            </SignContent>


        </Container>
    )
}