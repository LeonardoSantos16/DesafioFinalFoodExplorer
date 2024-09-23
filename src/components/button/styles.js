import styled from "styled-components";


export const Container = styled.button`
    display: flex;
    justify-content: center;
    gap: .4rem;
    width: 100%;
    height: ${props => props.height || '4.8rem'};
    border-radius: 5px;
    padding: 1.2rem 0rem;
    align-items: center;
    background: ${props => props.background || 'none'};
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    ${({ theme }) => theme.fonts.poppinsMedium100};
    cursor: pointer;
`
