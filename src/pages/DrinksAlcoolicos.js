import { useState, useEffect } from 'react';
import axios from 'axios';
import RecepiLink from '../components/RecepiLink'

function DrinksAlcoolicos () {


    const [drinks, setDrinks] = useState([]);

    useEffect(() =>{
        axios.get("www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
        .then((response) => {
            setDrinks(response.data.drinks);
        });
    }, []);

    return(
        <>
            <h2>RECEITAS</h2>
                <div className='drinks-com-alcool-page'>  
                    {drinks.map(drink => {
                        return (
                            <RecepiLink key={drink.idDrink} drinkIMG={drink.strDrinkThumb} drinkName={drink.strDrink} />
                        )
                    })}
                </div>
        </>
    );
};

export default DrinksAlcoolicos;
