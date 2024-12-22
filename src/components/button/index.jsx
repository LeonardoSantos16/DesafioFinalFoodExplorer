import { Container } from "./styles";

export function Button({ icon: Icon, text, bgColor, width, ...rest }) {

    return (
        <Container $width={width} {...rest} $colorbackground={bgColor}>
            {Icon && <Icon size={32} />}
            {text}
        </Container>
    )
}