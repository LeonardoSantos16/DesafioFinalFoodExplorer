import { Container } from "./styles"
import { CaretLeft } from "@phosphor-icons/react"
import { useTheme } from "styled-components";
// import { Link } from 'react-router-dom'
export function ButtonBack({ sizearrow, ...rest }) {
    const theme = useTheme();
    return (
        <Container {...rest}>
            <CaretLeft size={sizearrow} color={theme.COLORS.LIGHT_100} />
            <span>voltar</span>
        </Container>

    )
}