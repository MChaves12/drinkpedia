import { useState, useEffect } from 'react';
import axios from 'axios';
import RecepiLink from '../components/RecepiLink'

function ByIngredient () {


    const [drinks, setDrinks] = useState([]);

    useEffect(() =>{
        axios.get("www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
        .then((response) => {
            setDrinks(response.data.drinks);
        });
    }, []);

    return(
        <div>
            {drinks.map(drink => {
                return (
                    <RecepiLink drinkIMG={drink.strDrinkThumb} drinkName={drink.strDrink} />
                )
            })}
        </div>
    );
};

export default ByIngredient;
