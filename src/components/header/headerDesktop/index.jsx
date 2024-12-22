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
    const navigate = useNavigate();
    const theme = useTheme();
    const { signOut, isAdmin } = useAuth()

    function handleSignOut() {
        signOut()
    }

    function handleNewPrate() {
        navigate('/new')
    }
    
    const ButtonHeader = ({ isAdmin }) => { 
        if (isAdmin) {
            return (
                <Button
                    onClick={handleNewPrate}
                    bgColor={theme.COLORS.TINTS_TOMATO_100}
                    text='Novo prato'
                    $gap='.8rem'
                    height="5.6rem"
                />
            );
        } else {
            return (
                <Button
                    bgColor={theme.COLORS.TINTS_TOMATO_100}
                    icon={Receipt}
                    text='Pedidos (0)'
                    $gap='.8rem'
                    height="5.6rem"
                />
            );
        }
    };

    return (
        <Container>
            <NavHeader>
                <Brand
                    logo={logo}
                    sizeLogo='3rem'
                    gap='1rem'
                    corbrand={theme.COLORS.LIGHT_100}
                    styletext={theme.fonts.robotoBoldBigger} />

                <InputHeader>
                    <Input
                        icon={MagnifyingGlass}
                        placeholder="Busque por pratos ou ingredientes"
                        backgroundcolor={theme.COLORS.DARK_900}
                        onChange={onChange}
                        value={value}
                        width='25rem'
                        color='ffffff'
                    />
                </InputHeader>
                <ButtonTest>
                 <ButtonHeader isAdmin={isAdmin} />
                    </ButtonTest> 
                

                <ButtonSignOut onClick={handleSignOut}>
                    <SignOut size={32} />
                </ButtonSignOut>
            </NavHeader>

        </Container>
    )
}