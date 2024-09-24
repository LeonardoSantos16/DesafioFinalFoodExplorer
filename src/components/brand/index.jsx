import { Container, StyledH1 } from './styles'
import useMobile from "../../hooks/useMobile";
export function Brand({ logo, styletext, corbrand, gap, sizelogo }) {
    const isMobile = useMobile()
    /*const styleBrand = {
        ...styleText,
        color: corBrand,
    }
    */
    return (
        <Container $gap={gap}>
            <img src={logo} height={sizelogo} width={sizelogo} alt='logo' />
            <StyledH1 $styletext={styletext} $corbrand={corbrand}>food explorer</StyledH1>
        </Container>
    )
}
