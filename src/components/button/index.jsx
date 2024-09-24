import { Container } from "./styles";

export function Button({ icon: Icon, text, bgColor, ...rest }) {

    return (
        <Container {...rest} $colorbackground={bgColor}>
            {Icon && <Icon size={32} />}
            {text}
        </Container>
    )
}