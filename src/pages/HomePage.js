import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import RandomDrinkBanner from "../components/RandomDrinkBanner";
import ImgDrink1 from '../assets/imgDrink1.jpg';
import ImgDrink2 from '../assets/imgDrink2.jpg';
import ImgDrink3 from '../assets/imgDrink3.jpg';
import ImgBanner from '../assets/imgBanner.jpg'

function HomePage() {
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ImgDrink1}
              width={640}
              height={360}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Aprenda a fazer seus próprios drinks!l</h3>
              <p>Aprenda a fazer seus próprios drinks!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ImgDrink2}
              width={640}
              height={360}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Drinks profissionais feitos por você!l</h3>
              <p>Drinks profissionais feitos por você!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ImgDrink3}
              width={640}
              height={360}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Aproveite o seu drink!</h3>
              <p>Aproveite o seu drink!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="RandomBanner">
        <RandomDrinkBanner />
      </div>

      <div>
        <h1>Encontre a receita ideal para o seu drink aqui!</h1>
        <div className="mb-2">
          <Button variant="secondary" size="lg">
            GIN{" "}
          </Button>
        </div>
        <div className="mb-2">
          <Button variant="secondary" size="lg">
            VODKA{" "}
          </Button>
        </div>
      </div>

      <div>
        <Card className="banner-img">
          <Card.Img src={ImgBanner} width={640} height={360} alt="Bartender" />
          <Card.ImgOverlay>
            <Card.Text bg="light">
              Faça um drink profissional no conforto da sua casa!
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    </div>
  );
}

export default HomePage;
