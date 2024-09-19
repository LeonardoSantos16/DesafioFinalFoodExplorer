import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 1.9rem;
    align-items: center;
    height: 4.8rem;
  
`

export const StyledH1 = styled.h1`
  ${props => props.styletext}
  color: ${props => props.corbrand};
  flex-wrap: nowrap;

`;