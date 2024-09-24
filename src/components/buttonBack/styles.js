import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    gap: .5rem;
    border: none;
    height: 3.4rem;
    max-width: 10rem;
    background: none;
    cursor: pointer;
    text-decoration: none;
    > span {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        ${({ theme }) => theme.fonts.poppinsMedium100}
        @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
            ${({ theme }) => theme.fonts.poppinsBold300}
        }
    }
`

