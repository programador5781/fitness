import React from 'react';
import style from "./Carrousel.module.css"; // Importa tus estilos CSS

const Carousel = ({ data }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % data.length;
    setCurrentSlide(newSlide);
  };

  const prevSlide = () => {
    const newSlide = (currentSlide - 1 + data.length) % data.length;
    setCurrentSlide(newSlide);
  };

  return (
    <div className={style.carousel}>
      <button className={style.prevButton} onClick={prevSlide}>Prev</button>
      <div className={style.slide}>
        <img src={data[currentSlide].image} alt={`Slide ${currentSlide}`} />
        <h3>{data[currentSlide].title}</h3>
        <p>{data[currentSlide].description}</p>
      </div>
      <button className={style.nextButton} onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
