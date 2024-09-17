import styled from "styled-components";
import { fonts } from "../../styles/fonts";
export const Container = styled.div`
    width: ${(props) => props.width ? props.width : "100%"};
    height: 4.8rem;
    border-radius: ${(props) => props.borderRadius || '0.5rem'};
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 1.2rem 1.4rem;
    align-items: center;
    gap: 1.4rem;

   

    background: ${props => props.backgroundColor || props.theme['DARK_900']};
    > input {
        ${fonts.robotoRegularSmall};
        color: ${({theme}) => theme.COLORS.LIGHT_500};
        background: none;
        width: 100%;
    }
    > input[type="file"]::-webkit-file-upload-button {
            visibility: hidden; /* Esconde o botão padrão */
    }

`