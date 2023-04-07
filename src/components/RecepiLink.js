
function RecepiLink ({drinkIMG, drinkName}) {
    return(
        <div className='recepiLink-container'>
            <img src={drinkIMG} alt='drink-name'></img>
            <hr></hr>
            <p>{drinkName}</p>
            <hr></hr>
            <button className='recepiLinkBtn'>Show me the Recepi</button>
        </div>
    );
};

export default RecepiLink;