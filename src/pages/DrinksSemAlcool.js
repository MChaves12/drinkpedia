import { useState, useEffect } from 'react';
import RecipeLink from '../components/RecipeLink'
import apiControl from '../controls/apiControl'

function DrinksSemAlcool () {
    const [drinks, setDrinks] = useState([]);

    useEffect(() =>{
        apiControl.getNonAcoolicDrinks()
        .then((response) => {
            setDrinks(response);
        });
    }, []);

    return(
        <>
            <h2>RECEITAS</h2>
                <div className='drinks-sem-alcool-page'>  
                    {drinks.map(drink => {
                        return (
                            <RecipeLink key={drink.idDrink} drinkIMG={drink.strDrinkThumb} drinkName={drink.strDrink} idDrink={drink.idDrink} />
                        )
                    })}
                </div>
        </>
    );
};

export default DrinksSemAlcool;