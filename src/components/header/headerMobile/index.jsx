import { List } from "@phosphor-icons/react"
import { Brand } from "../../brand"
import logo from '../../../assets/logo_cake.svg'
import useMobile from "../../../hooks/useMobile"
import { Container, MenuHeader, MenuButton, BrandHeader, AdminUser, Receive } from './styles'
import { useTheme } from "styled-components";
import { useAuth } from "../../../hooks/authContext"
import { Receipt } from "@phosphor-icons/react"
export function HeaderMobile() {
    const isMobile = useMobile()
    const theme = useTheme();
    const {isAdmin} = useAuth()
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
                    {isAdmin ? <AdminUser>admin</AdminUser> : <Receive><Receipt color="white" size={32}/><span>0</span></Receive>}
                </BrandHeader>
            </MenuHeader>
        </Container>
    )
};