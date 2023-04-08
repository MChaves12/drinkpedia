import Button from "react-bootstrap/Button";

import Card from 'react-bootstrap/Card';

function HomePage(){
    return(
<div>
  <h1>Encontre a receita ideal para o seu drink aqui!</h1>
  <div className="mb-2">
    <Button variant="secondary" size="lg">
      Sugestao do Chef{" "}
    </Button>
    </div>
    <div>
<>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="holder.js/100px180" />
      </Card>
    </>
    </div>
    </div>
  );
}

export default HomePage;