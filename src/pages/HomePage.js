import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import RandomDrinkBanner from "../components/RandomDrinkBanner";
import ImgDrink1 from '../assets/imgDrink1-1.jpg';
import ImgDrink3 from '../assets/imgBartender1.jpg';
import ImgDrink2 from '../assets/amigos-rindo.jpg';
import ImgBanner from '../assets/imgBanner.jpg'

function HomePage() {
  return (
    <div className="">
      <div>
        <Carousel fade interval={1500}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ImgDrink1}
              height={650}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Aprenda a fazer seus próprios drinks!l</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ImgDrink2}
              height={650}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Viva bons momentos</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ImgDrink3}
              height={650}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Opções com e sem alcool</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <RandomDrinkBanner />


    </div>
  );
}

export default HomePage;
