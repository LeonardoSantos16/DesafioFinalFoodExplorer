import { Container, TextInput } from "./styles";

export function InputFile({ icon: Icon, backgroundcolor, width, borderradius, ...rest }) {
    return (
        <Container $width={width} $backgroundcolor={backgroundcolor} $borderradius={borderradius}>
            {Icon && <Icon color="#ffffff" size={24} />}
            <input {...rest} />
            <TextInput>Selecione imagem</TextInput>
        </Container>
    );
}