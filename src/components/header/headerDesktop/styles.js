import styled from "styled-components";


export const Container = styled.header`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.DARK_600};
    padding: 2.8rem 0rem;
`

export const NavHeader = styled.nav`
    display: flex;
    gap: 1.6rem;
    align-items: center;
    justify-content: center;
    max-width: 114rem;
    margin: 0 auto;
    padding: 0 1rem;

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
        gap: 3.2rem;
    }
`

export const ButtonSignOut = styled.button`
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: none;
    cursor: pointer;
    width: 3.2rem;
    height: 3.2rem;
`

export const ButtonTest = styled.div`
    max-width: 21.6rem;
    width: 100%;
`

export const InputHeader = styled.div`
    width: 100%;
    max-width: 58rem;
    flex: 1;
    min-width: 23rem;
`