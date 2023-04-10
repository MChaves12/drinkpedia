import { Link } from 'react-router-dom';

function RecipeLink ({drinkIMG, drinkName, idDrink}) {
    return(
        <div className='recepiLink-container'>
            <img className='recepiLink-img' src={drinkIMG} alt='drink-name'></img>
            <hr className='recepiLink-hr'></hr>
            <p className='recepiLink-p'>{drinkName}</p>
            <hr className='recepiLink-hr'></hr>
            <Link to={`/i=${idDrink}`}><button className='recepiLinkBtn'>Como fazer</button></Link> 
        </div>
    );
};

export default RecipeLink;