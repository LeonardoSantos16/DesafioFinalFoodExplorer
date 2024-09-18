import styled from "styled-components";

export const ContainerHome = styled.body`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 114rem;
    padding: 0 1rem;
    width: 100%;
`

export const SectionProducts = styled.h2`
    ${({ theme }) => theme.fonts.poppinsMedium400}
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    width: 100%;
`