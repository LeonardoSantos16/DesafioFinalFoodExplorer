import styled from "styled-components";

export const ContainerDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 42.2rem;
    height: 100vh;
`

export const ContentFood = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 2rem 5.6rem;
    gap: 1.6rem;
    align-items: center;
    max-width: 57rem;
    margin: 1.6rem auto 5rem;

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
        gap: 4.2rem;
        max-width: 117rem;
        padding: 0 2.7rem;
        margin: 3.2rem auto 15rem;
    }
`

export const EditContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    
    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
        flex-direction: row;
        gap: 4.7rem;
        width: 100%;
    }
`

export const ImageFood = styled.div`
    align-self: center;
    > img {
        width: 26.4rem;
        height: 26.4rem;

        @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
            width: 39rem;
            height: 39rem;
        }

    }
   

`

export const InfoFood = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    width: 100%;
    
    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
        align-items: flex-start;
    }

    >h1{
        ${({ theme }) => theme.fonts.poppinsMedium300}
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
            ${({ theme }) => theme.fonts.poppinsMedium500}
        }
    }
`

export const FoodDescription = styled.p`
    ${({ theme }) => theme.fonts.robotoSpacedSmall}
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    width: 100%;
    text-align: center;

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
        text-align: left;
        justify-content: baseline;
        ${({ theme }) => theme.fonts.poppinsRegular300};
    }
`

export const FoodTags = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 2.4rem;
    margin-bottom: 4.8rem;

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
        justify-content: flex-start;
    }
`
export const BackContainer = styled.div`
    display: flex;
    width: 100%;
`

export const EditButton = styled.div`
    width: 100%;

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
        width: 14.1rem;
    }
`

export const QuantityAdd = styled.div`
    display: flex;
    gap: 1.4rem;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    > button {
        background: none;
        cursor: pointer;
    }
    > span {
        ${({ theme }) => theme.fonts.robotoBoldBigger}
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
`

export const ContentOrder = styled.div`
    display: flex;
    gap: 1.6rem;
    width: 100%;
    align-items: center;
    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
        width: 29.4rem;
        gap: 3.3rem;
    }
`