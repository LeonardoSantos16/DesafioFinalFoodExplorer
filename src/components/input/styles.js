import styled from "styled-components";

export const Container = styled.div`
    width: ${(props) => props.width ? props.width : "100%"};
    height: 4.8rem;
    border-radius: ${(props) => props.$borderradius || '0.5rem'};
    border: ${(props) => props.$border || 'none'};
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 1.2rem 1.4rem;
    align-items: center;
    gap: 1.4rem;
    background: ${props => props.$backgroundcolor || 'green'};
    > input {
        ${({theme}) => theme.fonts.robotoRegularSmall};
        color: ${({theme}) => theme.COLORS.LIGHT_500};
        background: none;
        border: none;
        outline: none;
        width: ${(props) => props.$width || "100%"}; 
        

    }
    > input[type="file"]::-webkit-file-upload-button {
            visibility: hidden; 
        }

`

