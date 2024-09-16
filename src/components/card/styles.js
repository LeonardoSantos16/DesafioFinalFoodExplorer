import styled from "styled-components";

export const CardContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.4rem;
    gap: 1.2rem;
    width: 21rem;
    height: 29.2rem;
    border: 1px solid #000204;
    border-radius: .8rem;

    > img {
        margin-top: -2rem;
    }
`

export const FavoriteItem = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 2.2rem;
    height: 2.2rem;
    padding-top: -.8rem;
    padding-bottom: -.8rem;
`

export const TitleFood = styled.p`
    ${({ theme }) => theme.fonts.poppinsMedium100}
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    text-align: center;
    width: 100%;
    height: 2.4rem;
`

export const CardDescription = styled.p`
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    ${({ theme }) => theme.fonts.robotoRegularSmaller}
`

export const CardPrice = styled.span`
    width: 100%;
    height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
    ${({ theme }) => theme.fonts.robotoRegularSmall}
`

export const AddCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    justify-content: center;
    width: 100%;
    height: 3.2rem;
`

export const QuantityAdd = styled.div`
    display: flex;
    gap: 1.4rem;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    > span {
        ${({ theme }) => theme.fonts.robotoRegularSmall}
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
`

