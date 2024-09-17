import styled from "styled-components";

export const Container = styled.body`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   justify-content: center;
   padding: 0 3.2rem;
`

export const ContentForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    align-items: flex-start;
    width: 36.4rem;
    margin: 0 auto;

    > h2{
        ${({ theme }) => theme.fonts.poppinsMedium400}
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
`

export const FormCamp = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    width: 100%;
`