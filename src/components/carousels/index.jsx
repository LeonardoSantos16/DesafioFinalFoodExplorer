import React, { useEffect, useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ContainerCarousels, CardElement, NavButton, GradientCarousels } from './styles';
import { Card } from '../card';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import useMobile from '../../hooks/useMobile';
export function Carousels({ children }) {
  const isMobile = useMobile();
  //TODO: resolver erro do button do swiper com o sombreamento
  return (
    <ContainerCarousels>
      {!isMobile && <GradientCarousels/>}
      <Swiper
        onSwiper={(swiper) => console.log(swiper)}
        
        modules={[Navigation]}
        slidesPerView="3.4" 
        pagination
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        slidesPerGroup={1}
        breakpoints={{

          400: {
            slidesPerView:1.7
          },
          500:{
            slidesPerView: 2.4
          },
          550:{
            slidesPerView: 2.7
          },
          656:{
            slidesPerView: 3.4
          },
          768: {
            slidesPerView:2.4,
          },
          856: {
            slidesPerView:3
          },
          1100: {
            slidesPerView:3.4
          },
        }}
      >
      {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>
            <CardElement>
              {child}
            </CardElement>
          </SwiperSlide>
        ))}
        <NavButton className="swiper-button-next"></NavButton>
        <NavButton className="swiper-button-prev"></NavButton>
      </Swiper>
      
        
    </ContainerCarousels>
  );
}
/*
  {Array.from({ length: 7 }).map((_, index) => (
          <SwiperSlide key={index}>
            <CardElement>
              <Card 
                title="Salada Ravanello"
                price='49,97'
                description='Delicioso folheado de pêssego com folhas de hortelã.'
                quantity='2'
              />
            </CardElement>
          </SwiperSlide>
        ))}
          */