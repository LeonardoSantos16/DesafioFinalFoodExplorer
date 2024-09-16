import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    margin-top: 15%;
    padding: 1.5rem;

`

export const SignContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7.3rem;
`

export const FormSign = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;
    width: 31.6rem;

    > a {
        ${({ theme }) => theme.fonts.poppinsMedium100}
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        text-decoration: none;
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
