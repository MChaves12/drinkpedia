import { Link } from 'react-router-dom';

function RecipeLink ({drinkIMG, drinkName, idDrink}) {
    return(
        <div className='recipeLink-container'>
            <img src={drinkIMG} alt='drink-name'></img>
            <hr></hr>
            <p>{drinkName}</p>
            <hr></hr>
           <Link to={`/lookup.php?i=${idDrink}`}><button className='recepiLinkBtn'>Show me the Recipe</button></Link> 
        </div>
    );
};

export default RecipeLink;