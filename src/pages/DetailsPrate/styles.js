import styled from "styled-components";

export const ContainerDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`

export const ContentFood = styled.body`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 4.28rem;
    padding: 0 5.6rem;
    gap: 1.6rem;
    align-items: center;
    max-width: 57rem;

    margin: 0 auto;
`

export const EditContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

`

export const ImageFood = styled.div`
    > img {
        width: 26.4rem;
        height: 26.4rem;
    }
   

`

export const InfoFood = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    width: 100%;
    
    >h1{
        ${({ theme }) => theme.fonts.poppinsMedium300}
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
`

export const FoodDescription = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 57rem;
    ${({ theme }) => theme.fonts.robotoSpacedSmall}
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    width: 100%;
`

export const FoodTags = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 2.4rem;
    margin-bottom: 4.8rem;
`