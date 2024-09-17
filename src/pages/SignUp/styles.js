import styled from "styled-components";

export const Container = styled.div`
    display: flex;
   // justify-content: center;
    width: 100%;
    height: 100vh;

`

export const SignContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7.3rem;
    margin: 15% auto;
    padding: 1.5rem;

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.desktop}){
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        max-width: 112rem;
        width: 100%;
        margin: 0 auto;

    }
`

export const FormSign = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;
    width: 31.6rem;

    > h1 {
        ${({ theme }) => theme.fonts.poppinsMedium400}
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > a {
        ${({ theme }) => theme.fonts.poppinsMedium100}
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        text-decoration: none;
    }

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.desktop}){
        background: ${({ theme }) => theme.COLORS.DARK_700};
        width: 100%;
        max-width: 48rem;
        height: 62rem;
        padding: 6.4rem;
        border-radius: 1.6rem;
    }

`

export const FormCamp = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    width: 100%;

    > h3 {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        ${({ theme }) => theme.fonts.robotoRegularSmall}
    }
`
