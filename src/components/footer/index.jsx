import logo from '../../assets/logo.svg'
import { Brand } from "../brand";
import useMobile from "../../hooks/useMobile";
import { Container, Copyright, FooterContent } from "./styles";
import { useTheme } from "styled-components";
export function Footer() {
    const isMobile = useMobile()
    const theme = useTheme();
    return (
        <Container>
            <FooterContent>
                <Brand
                    logo={logo}
                    sizelogo={isMobile ? '20px' : '29px'}
                    corbrand={theme.COLORS.LIGHT_700}
                    styletext={isMobile ? theme.fonts.robotoBoldSmaller : theme.fonts.robotoBoldBigger}
                />
                <Copyright>© 2023 - Todos os direitos reservados.</Copyright>
            </FooterContent>
        </Container>

    )
}