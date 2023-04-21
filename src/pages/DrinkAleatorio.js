import { useState, useEffect } from 'react';
import apiControl from '../controls/apiControl';

function DrinkAleatorio () {

    const [drink, setDrink] = useState([]);

    useEffect(() =>{
       apiControl.getRandomDrink()
       .then((response) => {
        setDrink(response);
       })
    }, []);

    function novoDrink () {
        apiControl.getRandomDrink()
       .then((response) => {
        setDrink(response);
       })
    }

    return (
        <>
            <div className='recipe-page'>
            <h2 className='page-title'>{drink.strDrink}</h2>
                <div className='recipe-container'>
                    <img className='recipe-img' src={drink.strDrinkThumb} alt='drink'></img>
                    <div className='recipe-instructions-container'>
                        <h3>Ingredientes</h3>
                        <ul>
                            <li>{drink.strIngredient1}</li>
                            <li>{drink.strIngredient2}</li>
                            <li>{drink.strIngredient3}</li>
                            <li>{drink.strIngredient4}</li>
                            <li>{drink.strIngredient5}</li>
                            <li>{drink.strIngredient6}</li>                
                        </ul>
                        <h3>Modo de preparo</h3>
                        <p>{drink.strInstructions}</p>
                        <button onClick={novoDrink} className='sujestao-btn'>Novo Drink</button>
                    </div>
                </div>
        </div>
        </>
    ) ;
};

export default DrinkAleatorio;
