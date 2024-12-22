import { Container } from "./styles";

export function Input({ icon: Icon, border, backgroundcolor, width, borderradius, ...rest }) {
    return (
        <Container $border={border} $width={width} $backgroundcolor={backgroundcolor} $borderradius={borderradius}>
            {Icon && <Icon color="#ffffff" size={20} />}
            <input {...rest} />
        </Container>
    );
}