import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <MDBFooter bgColor="dark" className="bg-secondary text-white text-center text-md-start">
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="3" md="12" className="logo">
          <Link to='/' style={{textDecoration:'none', color: 'white'}}><span>DRINKPEDIA</span></Link>
          </MDBCol>

          <MDBCol lg="5" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Sobre a Drinkpedia</h5>
            <p className='sobre'>Descubra novas maneiras de se refrescar com nossas receitas de drinks! 
              Desde clássicos até inovações criativas, encontre a combinação perfeita para 
              cada ocasião. Nossas receitas são fáceis de seguir e incluem ingredientes 
              acessíveis para tornar sua experiência de mixologia divertida e saborosa. 
              Com a Drinkpedia você se torna um mestre dos drinks!
            </p>
          </MDBCol>

          <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">RECEITAS</h5>

            <ul className="list-unstyled">
              <li>
                <Link to='/alcooholic' className="text-white">
                  Drinks Alcoólicos
                </Link>
              </li>
              <li>
                <Link to='/nonalcooholic' className="text-white">
                  Drinks Não Alcoólicos
                </Link>
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
        <p>Se beber não dirija!</p>
      </div>
    </MDBFooter>
  );
}
