import { useState, useEffect } from 'react';
import apiControl from '../controls/apiControl'

function Recepi (){
    
    const [recepi, setRecepi] = useState({});
    

    useEffect(() =>{
        apiControl.getDrinkRecepi()
        .then((response) => {
            setRecepi(response);
        });
    }, []);

    return (
        <>
            <h2>{recepi[0].strDrink}</h2>
                <div className='recepi-container'>
                    <img className='recepi-img' src={recepi[0].strDrinkThumb} alt='drink'></img>
                    <div className='recepi-instructions-container'>
                        <h3>Ingredientes</h3>
                        <ul>
                            <li>{recepi[0].strIngredient1}</li>
                            <li>{recepi[0].strIngredient2}</li>
                            <li>{recepi[0].strIngredient3}</li>
                            <li>{recepi[0].strIngredient4}</li>
                            <li>{recepi[0].strIngredient5}</li>
                            <li>{recepi[0].strIngredient6}</li>                
                        </ul>
                        <h3>Modo de preparo</h3>
                        <p>{recepi[0].strInstructions}</p>
                    </div>
                </div>
        </>
    );
};

export default Recepi;