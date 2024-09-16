import { Container } from "./styles";

export function Button({color, icon : Icon, text, ...rest}) {

    return(
        <Container background={color} {...rest}>
            {Icon && <Icon size={32} />}
            {text}
        </Container>
    )
}