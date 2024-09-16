import styled from "styled-components";

export const ContainerBanner = styled.div`
    display: flex;
    justify-content: center;
    width: 37.6rem;
    height: 12rem;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 2.91696px;
    border: none;
`

export const BannerContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: .3rem;
    width: 21.5rem;
    > h1 {
        ${({ theme }) => theme.fonts.poppinsSemiBold}
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > p{
        ${({ theme }) => theme.fonts.poppinsRegular300}
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
`


