import { Container } from "./styles";

export function Input({ icon: Icon, backgroundcolor , width, borderradius, ...rest }) {
    return (
        <Container backgroundColor={backgroundcolor} borderRadius={borderradius}>
            {Icon && <Icon color="#ffffff" size={20} />}
            <input width={width} {...rest} />
        </Container>
    );
}