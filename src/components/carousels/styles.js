import styled from "styled-components";

export const ContainerCarousels = styled.div`
  width: 100%;
  min-width: 40rem;
  --swiper-navigation-size: 20px;
  --swiper-navigation-color: white;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
    max-width: 112rem;
    margin: 0 auto;
    padding: 0;
  }
`;

export const GradientCarousels = styled.div`
    position: absolute;
    width: 29rem;
    height: 44.8rem;
    z-index: 4;
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    pointer-events: none;

`



export const CardElement = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center; 
`;

export const NavButton = styled.button`
  //color: #fff;
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  display: none;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.mobile}){
    display: block;
  }
`;