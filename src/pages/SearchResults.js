import RecipeLink from "../components/RecipeLink";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import apiControl from '../controls/apiControl'

function SearchResults() {

  const [searchDrinks, setSearchDrinks] = useState([]);

  const { search } = useParams();

  useEffect(() => {
    apiControl.getDrinkByName(search)
          .then((response) => {
              setSearchDrinks(response);
          });
  }, [search]);


  return(
    <>
        <h2 className='page-title'>RECEITAS</h2>
            <div className="search-drinks-page">  
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
