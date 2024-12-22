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
    const { signIn } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignIn() {
        signIn({ email, password })
    }
    return (
        <Container>
            <SignContent>
                <Brand
                    gap='1rem'
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
                            backgroundcolor={isMobile ? theme.COLORS.DARK_900 : theme.COLORS.DARK_700}
                            borderradius="5px"
                            type="email"
                            placeholder="Exemplo: exemplo@exemplo.com.br"
                            onChange={e => setEmail(e.target.value)}
                            border= {isMobile ? 'none' : '1px solid #FFFFFF'}

                        />
                    </FormCamp>
                    <FormCamp>
                        <h3>Senha</h3>
                        <Input
                            backgroundcolor={isMobile ? theme.COLORS.DARK_900 : theme.COLORS.DARK_700}
                            borderradius="5px"
                            type="password"
                            placeholder="No mínimo 6 caracteres"
                            onChange={e => setPassword(e.target.value)}
                            border= {isMobile ? 'none' : '1px solid #FFFFFF'}
                        />
                    </FormCamp>
                    <Button
                        bgColor={theme.COLORS.TINTS_TOMATO_100}
                        text="Entrar"
                        onClick={(e) => handleSignIn(e)}
                        type="button"
                    />

                    <Link to="/register">Criar conta</Link>
                </FormSign>

            </SignContent>


        </Container>
    )
}