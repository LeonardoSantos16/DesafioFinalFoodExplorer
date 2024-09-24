import { List } from "@phosphor-icons/react"
import { Brand } from "../../brand"
import logo from '../../../assets/logo_cake.svg'
import useMobile from "../../../hooks/useMobile"
import { Container, MenuHeader, MenuButton, BrandHeader, AdminUser } from './styles'
import { useTheme } from "styled-components";

export function HeaderMobile() {
    // TODO: refatorar o color #ffffff para a propriedade LIGHT_100 do theme
    // TODO: depois da integração com a api criar a lógica para mostrar o componente AdminUser apenas quando for um usuário admin
    const isMobile = useMobile()
    const theme = useTheme();

    return (
        <Container>
            <MenuHeader>
                <MenuButton>
                    <List size={24} color="#ffffff" />
                </MenuButton>
                <BrandHeader>
                    <Brand
                        logo={logo}
                        sizelogo={isMobile ? '24px' : '30px'}
                        styletext={isMobile ? theme.fonts.robotoBoldBig : theme.fonts.robotoBoldBigger}
                        corbrand="#ffffff"
                        gap='10px' />
                    <AdminUser>admin</AdminUser>
                </BrandHeader>
            </MenuHeader>
        </Container>
    )
};