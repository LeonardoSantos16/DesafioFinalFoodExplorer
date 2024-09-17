import styled from "styled-components";

export const Container = styled.div`
    background: ${({theme}) => theme.COLORS.DARK_1000};
    text-align: center;
    color: #FFFFFF;
    height: 3.2rem;
    padding: .4rem .8rem;
    border-radius: 5px;
    border: none;
    ${({ theme }) => theme.fonts.poppinsMedium100}
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
`
