import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiControl from '../controls/apiControl'

function Recipe (){
    
    const [recipe, setRecipe] = useState({});

    const { idDrink } = useParams();
    

    useEffect(() =>{
        apiControl.getDrinkRecipe(idDrink)
        .then((response) => {
            setRecipe(response);
        });
    }, [idDrink]);

    return recipe.strDrink ? (
        <>
            <h2>{recipe.strDrink}</h2>
                <div className='recipe-container'>
                    <img className='recipe-img' src={recipe.strDrinkThumb} alt='drink'></img>
                    <div className='recipe-instructions-container'>
                        <h3>Ingredientes</h3>
                        <ul>
                            <li>{recipe.strIngredient1}</li>
                            <li>{recipe.strIngredient2}</li>
                            <li>{recipe.strIngredient3}</li>
                            <li>{recipe.strIngredient4}</li>
                            <li>{recipe.strIngredient5}</li>
                            <li>{recipe.strIngredient6}</li>                
                        </ul>
                        <h3>Modo de preparo</h3>
                        <p>{recipe.strInstructions}</p>
                    </div>
                </div>
        </>
    ) : <p>carregando....</p>;
};

export default Recipe;