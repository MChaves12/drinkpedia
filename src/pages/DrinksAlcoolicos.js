import { useState, useEffect } from 'react';
import RecipeLink from '../components/RecipeLink'
import axios from 'axios'
import api from '../controls/apiControl'

function DrinksAlcoolicos () {
    const [drinks, setDrinks] = useState([]);

    useEffect(() =>{
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
        .then((response) => {
            setDrinks(response.data.drinks);
        });
    }, []);

    return(
        <>
            <h2>RECEITAS</h2>
                <div className='.drinks-alcoolicos-page'>  
                    {drinks.map(drink => {
                        return (
                            <RecipeLink key={drink.idDrink} drinkIMG={drink.strDrinkThumb} drinkName={drink.strDrink} idDrink={drink.idDrink} />
                        )
                    })}
                </div>
        </>
    );
};

export default DrinksAlcoolicos;
