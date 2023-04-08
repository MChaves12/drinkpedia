
function RecipeLink ({drinkIMG, drinkName}) {
    return(
        <div className='recipeLink-container'>
            <img src={drinkIMG} alt='drink-name'></img>
            <hr></hr>
            <p>{drinkName}</p>
            <hr></hr>
            <button className='recepiLinkBtn'>Show me the Recipe</button>
        </div>
    );
};

export default RecipeLink;