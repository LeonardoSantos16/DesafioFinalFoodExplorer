import styled from "styled-components";

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 42.2rem;

`

export const SectionProducts = styled.h2`
    ${({ theme }) => theme.fonts.poppinsMedium400}
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    width: 100%;
`

export const CarouselContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.3rem;
`

export const SectionCarousel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
    width: 100%;
    max-width: 114rem;
    margin: 0 auto;
    padding: 0 1rem;

`