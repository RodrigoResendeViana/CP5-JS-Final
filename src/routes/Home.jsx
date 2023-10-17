

import {} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from '../Css/Home.module.css';
import combinado from '../assets/imagens/alacarte1.jpeg'
import rodizio from '../assets/imagens/rodizio.jpeg'
import temaki from '../assets/imagens/temaki.jpeg'

const Home = () => {

  const imagem ={
    height:'150px',
    width:'250px'
  }
  return (
    <>
      <div className="slideshow-container">
        <h1 className={styles.text}> OTOKO NASHI</h1>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true}}
        >
          <SwiperSlide> 
            <img className="imagem" src="./src/assets/imagens/japa1.jpg" alt="Imagem 1"  />
          </SwiperSlide>
          <SwiperSlide>
            <img  className="imagem" src="./src/assets/imagens/japa2.jpeg" alt="Imagem 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="imagem"  src="./src/assets/imagens/japa3.jpg" alt="Imagem 3" />
          </SwiperSlide>
        </Swiper>
        
      </div>
      <div className={styles.cards}>
          <div className={styles.card}>
            <img src={rodizio} alt="Produto 1" style={imagem}/>
            <h2>Rodizio</h2>
            <p>Preço: $99.99</p>
          </div>

          <div className={styles.card}>
            <img src={temaki} alt="Produto 2" style={imagem}/>
            <h2>Temaki</h2>
            <p>Preço: $29.99</p>
          </div>

          <div className={styles.card}>
            <img src={combinado} alt="Produto 3" style={imagem}/>
            <h2>Combinado</h2>
            <p>Preço: $69.99</p>
          </div>
        </div>
    </>
  );
};

export default Home;

