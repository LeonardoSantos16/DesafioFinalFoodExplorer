import styled from "styled-components";
import { fonts } from "../../styles/fonts";

export const Container = styled.button`
    display: flex;
    align-items: center;
    gap: .5rem;
    border: none;
    height: 3.4rem;
    width: 100%;

    > span {
        color: ${props.LIGHT_100};
        ${fonts.poppinsMedium100}
        @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
            ${fonts.poppinsBold300}
        }
    }
`

