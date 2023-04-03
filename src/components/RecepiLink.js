import drinkImg from '../assets/margarita.jpg';

function RecepiLink () {
    return(
        <div className='recepiLink-container'>
            <img src={drinkImg} alt='drink-name'></img>
            <hr></hr>
            <p>Drink Name</p>
            <hr></hr>
            <button className='recepiLinkBtn'>Show me the Recepi</button>
        </div>
    );
};

export default RecepiLink;