import { Container } from "./styles"
import { CaretLeft } from "@phosphor-icons/react"
import theme from "../../styles/theme"
import { useTheme } from "styled-components";
// import { Link } from 'react-router-dom'
export function ButtonBack({sizeArrow, styleText }){
    const theme = useTheme();
    return(
        <Container>
             <CaretLeft size={sizeArrow} color={theme.COLORS.LIGHT_100} />
            <span style={styleText}>voltar</span> 
        </Container>
       
    )
}