import styled from "styled-components";
import theme from "../../../styles/theme";


export const Container = styled.header`
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 11.4rem;
    padding:  0 2.8rem 2.8rem;
    background-color: ${theme.COLORS.DARK_700};
    
`

export const MenuHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.6rem;
    width: 100%;
    height: 3.4rem;
   
`

export const MenuButton = styled.button`
    border: none;
    width: 2.4rem;
    background: none;
    cursor: pointer;
`

export const BrandHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;
    flex: 1;
`

export const AdminUser = styled.span`
    width: 3.4rem;
    ${theme.fonts.robotoRegularSmallest}
    color: ${theme.COLORS.TINTS_CAKE_200}
`



