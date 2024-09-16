import { Container } from "./styles";

export function Input({ icon: Icon, backgroundColor , borderRadius, ...rest }) {
    return (
        <Container backgroundColor={backgroundColor} borderRadius={borderRadius}>
            {Icon && <Icon size={20} />}
            <input {...rest} />
        </Container>
    );
}