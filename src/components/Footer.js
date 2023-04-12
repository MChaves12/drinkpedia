import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="bg-secondary text-white text-center text-md-start">
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="6" md="12" className="logo">
            <img src="logoDrinkpedia.png" alt="Logo Drinkpedia"></img>
          </MDBCol>

          <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Sobre a Drinkpedia</h5>
            <p>Sobre a Drinkpedia</p>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">RECEITAS</h5>

            <ul className="list-unstyled">
              <li>
                <a href="alcooholic" className="text-white">
                  Drinks Alcoólicos
                </a>
              </li>
              <li>
                <a href="nonalcooholic" className="text-white">
                  Drinks Não Alcoólicos
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <p>Venda e consumo proibido para menores de 18 anos.</p>
      </div>
    </MDBFooter>
  );
}
