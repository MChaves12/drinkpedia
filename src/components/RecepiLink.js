
function RecepiLink ({drinkImg, drinkName}) {
    return(
        <div className='recepiLink-container'>
            <img src={drinkImg} alt='drink-name'></img>
            <hr></hr>
            <p>{drinkName}</p>
            <hr></hr>
            <button className='recepiLinkBtn'>Show me the Recepi</button>
        </div>
    );
};

export default RecepiLink;