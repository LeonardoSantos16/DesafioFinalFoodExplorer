import styled from "styled-components";


export const Container = styled.header`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.DARK_600};
    padding: 2.8rem 0rem;
`

export const NavHeader = styled.nav`
    display: flex;
    gap: 3.2rem;
    align-items: center;
    justify-content: center;
    max-width: 114rem;
    margin: 0 auto;
    padding: 0 1rem;
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
    width: 21.6rem;
`

export const InputHeader = styled.div`
    width: 100%;
    max-width: 58rem;
`