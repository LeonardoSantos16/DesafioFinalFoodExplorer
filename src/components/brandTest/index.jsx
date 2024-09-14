import logo from '../../assets/logo.svg'
import { Container } from './styles'
export function BrandTest({ ...rest }){
    return(
         <Container>
            <img src={logo} alt='logo' />
            <h1 {...rest}>food explorer</h1>
        </Container>
    )
}

