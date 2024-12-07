import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { getMainProducts } from '../../../service/apiService';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.css';
import { Product } from '../../../types';

const ProductSlider: React.FC = () => {

const [products, setProducts] = useState<Product[]>()

const getProducts = async () => {
    let result: Product[] = await getMainProducts();
    setProducts(result)
}

useEffect(()=> { getProducts()}, [])

  return (
    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation
      modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {products?.map((product) => (
        <SwiperSlide key={product._id}>
          <div className="slide-content">
            <img src={product.imagen} alt={`Imagen del producto: ${product.titulo}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
