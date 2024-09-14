import { Container } from "./styles";

export function Button({color, text, ...rest}) {

    return(
        <Container type="button" color={color} {...rest}>
            {text}
        </Container>
    )
}