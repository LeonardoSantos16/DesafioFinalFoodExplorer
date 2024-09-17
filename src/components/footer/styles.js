import styled from "styled-components"
import { fonts } from "../../styles/fonts";
import theme from "../../styles/theme";

export const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 7.7rem;
    padding: 3rem 2.7rem;
    background-color: ${theme.COLORS.DARK_600};

`

export const FooterContent = styled.div`
    display: flex;
    width: 112rem;
    gap: .8rem;
    justify-content: space-between;
    align-items: center;
`

export const Copyright = styled.p`
    font-family: 'DM Sans'; 
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.6rem;
    height: 1.6rem;
    align-items: center;
    color: ${theme.COLORS.LIGHT_200};
    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
        ${fonts.robotoRegularSmaller}
    }
    
`
