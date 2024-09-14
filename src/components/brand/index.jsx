import logo from '../../assets/logo.svg'
import { Container } from './styles'

export function Brand({ styleText, cor, sizeLogo }){
    const styleBrand = {
        ...styleText,
        color: cor,
    }
    return(
         <Container>
            <img src={logo} sizes={sizeLogo} alt='logo' />
            <h1 style={styleBrand}>food explorer</h1>
        </Container>
    )
}
