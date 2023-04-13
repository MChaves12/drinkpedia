import RecipeLink from "../components/RecipeLink";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SearchResults() {

  const [searchDrinks, setSearchDrinks] = useState([]);

const { search } = useParams();

useEffect(() =>{
  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
  .then((response) =>{
    setSearchDrinks(response.data.drinks)
    console.log(response);
  })
}, [search]);


  return(
    <>
        <h2>RECEITAS</h2>
            <div>  
                {searchDrinks.map(drink => {
                    return (
                        <RecipeLink key={drink.idDrink} drinkIMG={drink.strDrinkThumb} drinkName={drink.strDrink} idDrink={drink.idDrink} />
                    )
                })}
            </div>
    </>
);
};

export default SearchResults;
