import styled from "styled-components";
import theme from "../../styles/theme";
import { fonts } from "../../styles/fonts";

export const Container = styled.button`
    display: flex;
    justify-content: center;
    gap: .4rem;
    width: 100%;
    height: ${props => props.height || '4.8rem'};
    border-radius: 5px;
    padding: 1.2rem 3.2rem;
    align-items: center;
    background: ${props => props.background || 'none'};
    border: none;
    color: ${theme.COLORS.LIGHT_100};
    ${fonts.poppinsMedium100}
`
