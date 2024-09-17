import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
    padding: .8rem .16rem;
    border-radius: .8rem;
    width: 12rem;
    height: 3.2rem;
    background: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};

    > input {
        ${({ theme }) => theme.fonts.robotoRegularSmall};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: transparent;
        width: 65%;
        border: none;
        
        &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    > button {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        border: none;
        background: none;
        cursor: pointer;
    }
`

