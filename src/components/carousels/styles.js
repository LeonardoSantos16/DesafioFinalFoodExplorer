import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperContent = styled(Swiper)`
  position: relative;
  overflow: hidden; 

  .swiper-wrapper {
    overflow: visible; 
  }

  .gradient-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 29rem;
    height: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
    pointer-events: none; 
    z-index: 2;
  }

  .gradient-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 29rem;
    height: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
    pointer-events: none;
    z-index: 2;
  }
`;

export const ContainerCarousels = styled.div`
  width: 100%;
  min-width: 40rem;
  --swiper-navigation-size: 20px;
  --swiper-navigation-color: white !important;
  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.tablet}){
    max-width: 112rem;
    margin: 0 auto;
    padding: 0;
  }
`;

export const CardElement = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center; 
`;

