import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { ContainerCarousels, CardElement, SwiperContent } from './styles';
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import useMobile from '../../hooks/useMobile';
export function Carousels({ children }) {
  const isMobile = useMobile();
 
  return (
    <ContainerCarousels>
      <SwiperContent
         key={isMobile ? 'mobile' : 'desktop'}
        onSwiper={(swiper) => swiper}
        modules={[Navigation, FreeMode]}
        slidesPerView="3.4"
        freeMode={isMobile}
        pagination
        navigation={!isMobile}
        slidesPerGroup={1}
        breakpoints={{

          400: {
            slidesPerView: 1.7
          },
          500: {
            slidesPerView: 2.4
          },
          550: {
            slidesPerView: 2.7
          },
          656: {
            slidesPerView: 3.4
          },
          768: {
            slidesPerView: 2.4,
          },
          856: {
            slidesPerView: 3
          },
          1100: {
            slidesPerView: 3.4
          },
        }}
      >
        {!isMobile && <> <div className="gradient-left" />
         <div className="gradient-right" /> </>
        }
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>
            <CardElement>
              {child}
            </CardElement>
          </SwiperSlide>
        ))}

      </SwiperContent>

    </ContainerCarousels>
  );
}