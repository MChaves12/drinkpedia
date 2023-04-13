import { useState, useEffect } from 'react';
import axios from 'axios';
import RecepiLink from '../components/RecipeLink'

function ByIngredient () {


    const [drinks, setDrinks] = useState([]);

    useEffect(() =>{
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin")
        .then((response) => {
            setDrinks(response.data.drinks);
        });
    }, []);

    return(
        <>
            <h2>RECEITAS</h2>
                <div className='drinks-alcoolicos-page'>  
                    {drinks.map(drink => {
                        return (
                            <RecepiLink key={drink.idDrink} drinkIMG={drink.strDrinkThumb} drinkName={drink.strDrink} />
                        )
                    })}
                </div>
        </>
    );
};

export default ByIngredient;
