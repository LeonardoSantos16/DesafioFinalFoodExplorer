import { Brand } from "../../components/brand"
import { Button } from "../../components/button"
import { Input } from "../../components/input"
import { Container, SignContent, FormSign, FormCamp } from "./styles"
import logo_cake from '../../assets/logo_cake.svg'
import { useTheme } from "styled-components"
import useMobile from "../../hooks/useMobile"
export function SignUp(){
    const theme = useTheme();
    const isMobile = useMobile()
    return(
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
                {!isMobile && <h1>Crie sua conta</h1>}
                    <FormCamp>
                        <h3>Email</h3>
                        <Input
                            backgroundcolor={theme.COLORS.DARK_900}
                            borderradius="8px"
                            placeholder="Exemplo: exemplo@exemplo.com.br"
                        />
                    </FormCamp>

                    <FormCamp>
                        <h3>Senha</h3>
                    <Input
                         backgroundcolor={theme.COLORS.DARK_900}
                         borderradius="8px"
                         placeholder="No mínimo 6 caracteres"
                    />
                    </FormCamp>
                    <Button
                        color={theme.COLORS.TINTS_TOMATO_100}
                        text="Entrar"
                    />

                    <a href="/">Criar uma conta</a>
                </FormSign>
                
            </SignContent>
            

        </Container>
    )
}