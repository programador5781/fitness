import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import style from "./Home.module.css";
import { imagen, img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9 } from "./index";
import Programs from "../../components/Programs/Programs";
// import array from "../../components/Carrousel/CarrouselData.json";


// const Carousel = ({ data }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);


//   const nextSlide = () => {
//     const newSlide = (currentSlide + 1) % data.length;
//     setCurrentSlide(newSlide);
//   };

//   const prevSlide = () => {
//     const newSlide = (currentSlide - 1 + data.length) % data.length;
//     setCurrentSlide(newSlide);
//   };

//   return (
//     <div className="carousel">
//       <button onClick={prevSlide}>Prev</button>
//       <div className="slide">
//         <img src={data[currentSlide].image} alt={`Slide ${currentSlide}`} />
//         <h3>{data[currentSlide].title}</h3>
//         <p>{data[currentSlide].description}</p>
//       </div>
//       <button onClick={nextSlide}>Next</button>
//     </div>
//   );
// };




function Home() {

  // const carouselData = array;
  const redirectToWhatsApp = () => {
    const phoneNumber = "+573147548254"; // Reemplaza con el número de teléfono del encargado o el enlace de WhatsApp

    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  }

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Muestra u oculta el botón dependiendo del desplazamiento
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) { // Cambia 100 por el desplazamiento que desees
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Desplazamiento suave
    });
  };

  return (
    <div className={style.container}>
      {isVisible && (
        <button className={style.scrollToTop} onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
      <div className={style.backgroundContainer}>
        <div className={style.content}>
          <img src={imagen} alt="Logo" className={style.logo} />
          <div className={style.textContainer}>
            <p className={style.texto_uno}>TODO LO QUE<br /> NECESITAS</p>
            <p className={style.texto_dos}>PARA ENCONTRAR<br /> TU FORMA</p>
            <p className={style.texto_tres}>MEJORA TU VIDA,<br /> UN ENTRENAMIENTO A LA VEZ.</p>
            <button className={style.btn_home}>Inscríbete Ya!</button>
          </div>
        </div>
      </div>

      <div className={style.secondaryContent}>
        {/* <div className={style.contenedor_titulo}>
          <h2>¿QUÉ OBTIENES?</h2>
        </div> */}

        <div className={style.contenedor_casillas}>
          {/* <div className={style.casilla}>
            <img src={img_1} alt="Imagen 1" />
            <h3>Entrenamiento Físico Guiado</h3>
            <p>Más de 50 clases por semana en grupos pequeños.</p>
          </div>

          <div className={style.casilla}>
            <img src={img_2} alt="Imagen 2" />
            <h3>Nuestros Horarios</h3>
            <p>Lunes a Viernes de 7:00 am a 12 m<br /> y de 4:00 pm a 8:00 pm. <br /> Sábado de 7:00 am a 12 m</p>
          </div>

          <div className={style.casilla}>
            <img src={img_3} alt="Imagen 3" />
            <h3>Gran variedad de equipo para hacer ejercicio</h3>
            <p>Nunca tendrás que esperar por máquinas.</p>
          </div>

          <div className={style.casilla}>
            <img src={img_4} alt="Estrella" />
            <h3>Membresías sin compromiso</h3>
            <p>Somos flexibles para ajustarnos a tu vida.</p>
          </div> */}
          {/* <Carousel data={carouselData} /> */}

        </div>
        <div>
          <Programs />
        </div>
      </div>


      <div className={style.thirdContainer}>
        <img src={img_5} alt="girl_gym" className={style.img_5} />
        <p className={style.overlayText}>Descubre los beneficios de los entrenamientos personalizados en nuestro gimnasio. Nuestros entrenadores están listos para adaptar tu rutina a tus objetivos.Descubre las ventajas de un plan adaptado a tus necesidades.</p>
        {/* <button className={style.btn_adquirir}>ADQUIRIR</button> */}
        <button onClick={redirectToWhatsApp} className={style.btn_adquirir}>ADQUIRIR</button>
      </div>

      <div className={style.contenedor__img__rc}>
        <figure>
          <img src={img_7} alt="mujer en el gym imagen 7" />
          <div className={style.capa}>
            <h3>TrainingMax GYM</h3>
            <p>Entrenamiento de la mejor calidad </p>
          </div>
        </figure>
        <figure>
          <img src={img_6} alt="hombre en el gym imagen 6" />
          <div className={style.capa}>
            <h3>TrainingMax GYM</h3>
            <p>Entrenamiento de la mejor calidad</p>
          </div>
        </figure>
        <figure>
          <img src={img_8} alt="mujer en el gym imagen 8" />
          <div className={style.capa}>
            <h3>TrainingMax GYM</h3>
            <p>Entrenamiento de la mejor calidad</p>
          </div>
        </figure>
        <figure>
          <img src={img_9} alt="hombre en el gym imagen 9" />
          <div className={style.capa}>
            <h3>TrainingMax GYM</h3>
            <p>Entrenamiento de la mejor calidad</p>
          </div>
        </figure>
      </div>
    </div>
  );
}

export default Home;
