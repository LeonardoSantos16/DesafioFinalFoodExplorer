import { Brand } from "../../brand";
import { useTheme } from "styled-components";
import logo from '../../../assets/logo_cake.svg'
import { Input } from "../../input";
import { MagnifyingGlass, Receipt, SignOut } from "@phosphor-icons/react";
import { Button } from "../../button";
import { Container, NavHeader, ButtonSignOut, ButtonTest, InputHeader } from "./styles";
import { useAuth } from "../../../hooks/authContext";
import { useNavigate } from "react-router-dom";
export function HeaderDesktop({ onChange, value }) {
    // TODO: transformar esses valores em pixels para rem
    // ajustar o valor o tamanho do header (definir como 112rem)
    const navigate = useNavigate();
    const theme = useTheme();
    const { signOut } = useAuth()
    function handleSignOut() {
        signOut()
    }
    function handleNewPrate() {
        event.preventDefault()
        navigate('/new')
    }
    return (
        <Container>
            <NavHeader>
                <Brand
                    logo={logo}
                    sizeLogo='30px'
                    gap='10px'
                    corbrand={theme.COLORS.LIGHT_100}
                    styletext={theme.fonts.robotoBoldBigger} />

                <InputHeader>
                    <Input
                        icon={MagnifyingGlass}
                        placeholder="Busque por pratos ou ingredientes"
                        backgroundcolor={theme.COLORS.DARK_900}
                        onChange={onChange}
                        value={value}
                    />
                </InputHeader>

                <ButtonTest onClick={handleNewPrate}>
                    <Button
                        bgColor={theme.COLORS.TINTS_TOMATO_100}
                        icon={Receipt}
                        text='Pedidos (0)'
                        $gap='8px'
                        height="56px"

                    />
                </ButtonTest>

                <ButtonSignOut onClick={handleSignOut}>
                    <SignOut size={32} />
                </ButtonSignOut>
            </NavHeader>

        </Container>
    )
}