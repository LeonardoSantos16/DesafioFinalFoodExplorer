import styled from "styled-components";

export const CardContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.4rem;
    gap: 1.2rem;
    width: 21rem;
    border: 1px solid #000204;
    border-radius: .8rem;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background-color: ${({theme}) => theme.COLORS.DARK_200};;
    > img {
        margin-top: -2.5rem;
        width: 8.8rem;
        height: 8.8rem;

        @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
            width: 17.2rem;
            height: 17.2rem;
        }

    }

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
        width: 30rem;
        height: 46rem;
    }
`

export const FavoriteItem = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 110%;
    padding-top: -1rem;
    padding-bottom: -.8rem;
    
    align-items: flex-end;
    
`

export const TitleFood = styled.p`
    ${({ theme }) => theme.fonts.poppinsMedium100}
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    text-align: center;
    width: 100%;
    height: 2.4rem;
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
        ${({ theme }) => theme.fonts.poppinsBold300}
    }
`

export const CardDescription = styled.p`
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    ${({ theme }) => theme.fonts.robotoRegularSmaller}
    text-align: center;
`

export const CardPrice = styled.span`
    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
    ${({ theme }) => theme.fonts.robotoRegularSmall}

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
        ${({ theme }) => theme.fonts.robotoRegularBiggest}
        
    }
    
`

export const AddCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    justify-content: center;
    width: 100%;

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
        flex-direction: row;
    }
`

export const QuantityAdd = styled.div`
    display: flex;
    gap: 1.4rem;
    justify-content: center;
    width: 100%;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

   
    > button {
        background: none;
        cursor: pointer;
    }
    > span {
        ${({ theme }) => theme.fonts.robotoRegularSmall}
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
            ${({ theme }) => theme.fonts.robotoBoldBig}
        }
    }   
`

