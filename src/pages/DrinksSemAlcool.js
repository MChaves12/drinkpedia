import { useState, useEffect } from 'react';
import axios from 'axios';
import RecepiLink from '../components/RecepiLink'

function DrinksSemAlcool () {


    const [drinks, setDrinks] = useState([]);

    useEffect(() =>{
        axios.get("www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
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
                            <RecepiLink key={drink.idDrink} drinkIMG={drink.strDrinkThumb} drinkName={drink.strDrink} />
                        )
                    })}
                </div>
        </>
    );
};

export default DrinksSemAlcool;