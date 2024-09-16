import { List } from "@phosphor-icons/react"
import { Brand } from "../../brand"
import logo from '../../../assets/logo_cake.svg'
import useMobile from "../../../hooks/useMobile"
import { fonts } from "../../../styles/fonts"
import { Container, MenuHeader, MenuButton, BrandHeader, AdminUser } from './styles'
export function HeaderMobile(){
    // TODO: refatorar o color #ffffff para a propriedade LIGHT_100 do theme
    // TODO: depois da integração com a api criar a lógica para mostrar o componente AdminUser apenas quando for um usuário admin
    const isMobile = useMobile()
    return(
        <Container>
            <MenuHeader>
                <MenuButton>
                    <List size={24} color="#ffffff" />
                </MenuButton>
                <BrandHeader>
                    <Brand
                        logo={logo}
                        sizelogo={ isMobile ? '24px' : '30px'} 
                        styletext={ isMobile ? fonts.robotoBoldBig : fonts.robotoBoldBigger}
                        corbrand="#ffffff"
                        gap='10px' />
                    <AdminUser>admin</AdminUser>
                </BrandHeader>
            </MenuHeader>
        </Container>
    )
};