import styled from "styled-components";

export const Container = styled.a`
    display: flex;
    align-items: center;
    border: none;
    height: 3.4rem;
    background: none;
    cursor: pointer;
    text-decoration: none;
    > span {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        ${({ theme }) => theme.fonts.poppinsMedium200}
        @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
            ${({ theme }) => theme.fonts.poppinsBold300}
        }
    }
`


