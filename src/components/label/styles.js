import styled from "styled-components";

export const Container = styled.h3`
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    ${({ theme }) => theme.fonts.robotoRegularSmall}
`