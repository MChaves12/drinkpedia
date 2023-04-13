import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Search from '../pages/Search';


function NavBar() {

  /*const[drinkList, setDrinkList] = useState(drinks);
  const [filteredDrinkList, setFilteredList] = useState(drinks);
  
  const filterList = (str) => {
    const filteredList = drinkList.filter(drink =>{
      return drink.value.toLowerCase();
    })
    setFilteredList(filteredList)
  }*/


  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          {/*<img src={Logo} alt="Logo Drinkpedia" className="logo"></img>*/}
          <span>{"LOGO"}</span>
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
