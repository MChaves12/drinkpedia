import { useState, useEffect } from 'react';
import RecipeLink from '../components/RecipeLink';
import apiControl from '../controls/apiControl';
import Spinner from '../components/Spinner';


function DrinksAlcoolicos () {
    const [drinks, setDrinks] = useState([]);
   
    useEffect(() =>{
        apiControl.getAcoolicDrinks()
        .then((response) => {
            setDrinks(response);
        });
    }, []);

    return drinks ? (
        <>
            <h2 className='page-title'>RECEITAS</h2>
                <div className='drinks-alcoolicos-page'>  
                    {drinks.map(drink => {
                        return (
                            <RecipeLink key={drink.idDrink} drinkIMG={drink.strDrinkThumb} drinkName={drink.strDrink} idDrink={drink.idDrink} />
                        )
                    })}
                </div>
        </>
    ) : <Spinner />;
};

export default DrinksAlcoolicos;
