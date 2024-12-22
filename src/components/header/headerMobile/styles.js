import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.header`
    display: flex;
    align-items: flex-end;
    width: 100%;
    min-width: 320px; 
    height: 11.4rem;
    padding: 0 2.8rem 2.8rem;
    background-color: ${theme.COLORS.DARK_700};
`;

export const MenuHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3.4rem;
    position: relative; 
`;

export const MenuButton = styled.button`
    border: none;
    width: 2.4rem;
    background: none;
    cursor: pointer;
`;

export const BrandHeader = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    gap: 0.8rem;
    flex: 1;
`;

export const AdminUser = styled.span`
    width: 3.4rem;
    ${theme.fonts.robotoRegularSmallest}
    color: ${theme.COLORS.TINTS_CAKE_200};
`;

export const Receive = styled.div`
    position: absolute;
    right: 0;  
    display: flex;
    align-items: center;
    justify-content: center;
    
    > span {
        position: absolute;
        top: -5px;
        right: -5px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        width: 2rem;
        height: 2rem;
        background: ${({theme}) => theme.COLORS.TINTS_TOMATO_100};
        border-radius: 99px;
        font-size: 1.2rem;
    }
`;
