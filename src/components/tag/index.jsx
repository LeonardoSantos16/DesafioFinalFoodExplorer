import { Container } from "./styles";

export function Tag ({text, ...rest}){
    return(
        <Container {...rest}>
            {text}
        </Container>
    )
}