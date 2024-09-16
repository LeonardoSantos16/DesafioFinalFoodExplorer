import { fonts } from "../../../styles/fonts";
import { Brand } from "../../brand";
import { useTheme } from "styled-components";
import logo from '../../../assets/logo_cake.svg'
import { Input } from "../../input";
import { MagnifyingGlass, Receipt, SignOut } from "@phosphor-icons/react";
import { Button } from "../../button";
import { Container, NavHeader, ButtonSignOut, ButtonTest, InputHeader } from "./styles";
export function HeaderDesktop(){
    // TODO: transformar esses valores em pixels para rem
    // ajustar o valor o tamanho do header (definir como 112rem)
    const theme = useTheme();
    return(
        <Container>
            <NavHeader>
                <Brand
                    logo={logo}
                    sizeLogo='30px'
                    gap='10px'
                    corbrand={theme.COLORS.LIGHT_100}
                    styletext={fonts.robotoBoldBigger} />
                
                <InputHeader>
                    <Input
                        icon={ MagnifyingGlass }
                        fontstyle={fonts.robotoRegularSmall}
                        placeholder="Busque por pratos ou ingredientes"
                        backgroundColor={theme.COLORS.DARK_900}
                    />
                </InputHeader>
                
                <ButtonTest>
                    <Button
                        color={theme.COLORS.TINTS_TOMATO_100}
                        icon={Receipt}
                        text='Pedidos (0)'
                        gap='8px'
                        height="56px" 
                    />
                </ButtonTest>
                
                <ButtonSignOut>
                    <SignOut size={32}/>
                </ButtonSignOut>
            </NavHeader>
            
        </Container>
    )
}