import styled from "styled-components";
import { fonts } from "../../styles/fonts";
export const Container = styled.div`
    width: 100%;
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
        color: ${props => props.LIGHT_500};
        width: ${(props) => props.width || '100%'};
        background: none;

        
    }
`