import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Search() {
  const [search, setSearch] = useState([]);
  const [drinksSearch, setDrinksSearch] = useState([]);
const navigate = useNavigate();
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  async function SearchDrink() {
    
    navigate(`/search/${search}`)
  }

  console.log(drinksSearch);
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        value={search}
        onChange={handleSearch}
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-success" onClick={SearchDrink}>
        Search
      </Button>
    </Form>
  );
}

export default Search;
