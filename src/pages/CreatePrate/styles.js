import styled from "styled-components";

export const Container = styled.body`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   justify-content: center;
   margin: 0 auto;
   min-width: 42.8rem;
 
`

export const ContentForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    align-items: flex-start;
    padding: 0 3.2rem;
    margin-bottom: 5rem;
     
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

export const IngredientsCamp = styled.div`
    display: flex;
    gap: 1.6rem;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.DARK_800};
    width: 100%;
    height: 4.8rem;
    border-radius: .8rem;
    border: none;
`