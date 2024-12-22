import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 4.8rem;
    border-radius: ${(props) => props.$borderradius || '0.5rem'};
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 1.2rem 1.4rem;
    align-items: center;
    gap: .8rem;
    background: ${props => props.$backgroundcolor || 'green'};
    position: relative;
    > input {
        ${({theme}) => theme.fonts.robotoRegularSmall};
        color: ${({ theme }) => theme.COLORS.DARK_800};
        background: none;
        border: none;
        outline: none;
        width: 15rem;
        

    }
    > input[type="file"]::-webkit-file-upload-button {
        visibility: hidden; 
    }

`
export const TextInput = styled.div`
    position: absolute;
    width: 13.3rem;
    height: 2.4rem;
    color:${({ theme }) => theme.COLORS.LIGHT_100};
    ${({ theme }) => theme.fonts.poppinsMedium100}
    display: flex;
    align-items: center;
    text-align: center;
    pointer-events: none;
`

