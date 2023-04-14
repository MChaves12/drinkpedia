import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Search from '../pages/Search';
import logo from '../assets/logoDrinkpedia.png';
 

function NavBar() {

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo Drinkpedia" className="logo-icon"></img>
          <span className="logo">DRINKPEDIA</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
          
            <NavDropdown title="RECEITAS" id="navbarScrollingDropdown">
              <NavDropdown.Item href="alcooholic">
                Drinks Alcoólicos
              </NavDropdown.Item>
              <NavDropdown.Item href="nonalcooholic">
                Drinks Não Alcoólicos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Search/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
