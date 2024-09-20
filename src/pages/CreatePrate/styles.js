import styled from "styled-components";
export const Container = styled.div`
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
    margin-bottom: 5rem;
    max-width: 114rem;
    padding: 0 1rem;
    width: 100%;
    margin: 0 auto;
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
    width: ${(props) => props.width ? props.width : '100%'};

 

`

export const IngredientsCamp = styled.div`
    display: flex;
    gap: 1.6rem;
    flex-wrap: wrap;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.DARK_800};
    width: 100%;
    border-radius: .8rem;
    border: none;
    padding: .8rem;
`

export const UploadButtons = styled.div`
    display: flex;
    gap: 3.2rem;
    width: 100%;
`

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    width: 100%;

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
        flex-direction: row;
/*
        & > :nth-last-child() {
            width: 15rem;
        }
   :nth-last-child(1){
            background-color: yellow;
        }
      
            */
       
    }

`

export const Select = styled.select`
    background: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    width: 100%;
    height: 4.8rem;
    border-radius: .5rem;
    padding: 1.2rem;
    ${({ theme }) => theme.fonts.robotoRegularSmaller}
`