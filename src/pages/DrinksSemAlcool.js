import { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeLink from '../components/RecipeLink'

function DrinksSemAlcool () {


    const [drinks, setDrinks] = useState([]);

    useEffect(() =>{
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
        .then((response) => {
            setDrinks(response.data.drinks);
        });
    }, []);

    return(
        <>
            <h2>RECEITAS</h2>
                <div className='drinks-sem-alcool-page'>  
                    {drinks.map(drink => {
                        return (
                            <RecipeLink key={drink.idDrink} drinkIMG={drink.strDrinkThumb} drinkName={drink.strDrink} />
                        )
                    })}
                </div>
        </>
    );
};

export default DrinksSemAlcool;