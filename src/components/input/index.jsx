import { Container } from "./styles";

export function Input({ icon: Icon, backgroundcolor, width, borderradius, ...rest }) {
    return (
        <Container width={width} $backgroundcolor={backgroundcolor} $borderradius={borderradius}>
            {Icon && <Icon color="#ffffff" size={20} />}
            <input {...rest} />
        </Container>
    );
}