import styled from "styled-components";

export const ContainerBanner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 600rem;
    width: 100%;
    height: 12rem;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 2.91696px;
    border: none;
    margin: 4.4rem auto 0;
    padding: 0 1rem;

    @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
        max-width: 114rem;
        height: 26rem;
     margin: 16rem auto 0;

    }
    > img {
        height: 14.9rem;
        width: 19.1rem;
        margin-top: -2.9rem;
        margin-left: -3.2rem;

        @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
            width: 65rem;
            height: 40rem;
            margin-top: -13rem;
            margin-left: -12rem;
        }
    }
`

export const BannerContent = styled.div`
    display: flex;
    flex-direction: column;
    > h1 {
        ${({ theme }) => theme.fonts.poppinsSemiBold}
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
            ${({ theme }) => theme.fonts.poppinsMedium500}
        }

    }

    > p{
        ${({ theme }) => theme.fonts.robotoRegularSmaller}
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
            ${({ theme }) => theme.fonts.robotoRegularSmall}
        }
    }
`

