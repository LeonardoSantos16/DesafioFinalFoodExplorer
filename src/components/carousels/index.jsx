import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ContainerCarousels, CardElement } from './styles';
import { Card } from '../card';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

function App() {
  return (
    <ContainerCarousels>
      <Swiper
        spaceBetween={10} // Adjust spacing between slides
        slidesPerView={3} // Number of slides to show at once
        pagination={{ clickable: true }} // Add pagination if needed
        navigation // Add navigation buttons if needed
      >
        {Array.from({ length: 4 }).map((_, index) => (
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
      </Swiper>
    </ContainerCarousels>
  );
}

export default App;
