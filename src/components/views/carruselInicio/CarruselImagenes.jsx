import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import "./carrusel.css";

const CarruselImagenes = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className="py-5">
         <h2 className="pb-3">Imágenes Destacadas</h2>
      <Slider {...settings}>
        <div>
          <img
            src="https://i.pinimg.com/564x/91/eb/78/91eb781cff07eeef769c2a3bc696fe6e.jpg"
            alt=""
            className="imgCarrusel"
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/564x/01/4d/7b/014d7b692110b40c0e695d5eaac8e09e.jpg"
            alt=""
            className="imgCarrusel"
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/564x/fa/f9/17/faf917139fb68c3ae1e887327294f8a5.jpg"
            alt=""
            className="imgCarrusel"
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/564x/35/e9/85/35e9857e70eb79141583f7e7d9d635ff.jpg"
            alt=""
            className="imgCarrusel"
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/564x/a4/f7/4a/a4f74a124ad60a78ccde64e9240a66bd.jpg"
            alt=""
            className="imgCarrusel"
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/564x/61/13/10/6113108a40f86fedb613adc45b45b312.jpg"
            alt=""
            className="imgCarrusel"
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/564x/19/3e/61/193e61cee14914f93d6142100951bd69.jpg"
            alt=""
            className="imgCarrusel"
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/564x/24/06/c2/2406c2f773c0d5b727ba42bf13822058.jpg"
            alt=""
            className="imgCarrusel"
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/564x/33/a4/37/33a43780eb931acc493e603bab4dd6bf.jpg"
            alt=""
            className="imgCarrusel"
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/564x/4f/ba/12/4fba12dc439b47b9d39968d1d299d786.jpg"
            alt=""
            className="imgCarrusel"
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/564x/79/e0/8f/79e08fa7b33a71095f9953e841117ea9.jpg"
            alt=""
            className="imgCarrusel"
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/564x/69/14/ca/6914ca44b7c9f95399f11bb09da97aa4.jpg"
            alt=""
            className="imgCarrusel"
          />
        </div>
      </Slider>
    </Container>
  );
};

export default CarruselImagenes;
