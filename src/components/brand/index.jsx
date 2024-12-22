import { Container, StyledH1 } from './styles'
export function Brand({ logo, styletext, corbrand, gap, sizelogo }) {
 
    return (
        <Container $gap={gap}>
            <img src={logo} height={sizelogo} width={sizelogo} alt='logo' />
            <StyledH1 $styletext={styletext} $corbrand={corbrand}>food explorer</StyledH1>
        </Container>
    )
}
