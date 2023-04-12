import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiControl from '../controls/apiControl'

function Recepi (){
    
    const [recepi, setRecepi] = useState({});

    const { idDrink } = useParams();
    

    useEffect(() =>{
        apiControl.getDrinkRecepi(idDrink)
        .then((response) => {
            setRecepi(response);
        });
    }, []);

    return recepi.strDrink ? (
        <>
            <h2>{recepi.strDrink}</h2>
                <div className='recepi-container'>
                    <img className='recepi-img' src={recepi.strDrinkThumb} alt='drink'></img>
                    <div className='recepi-instructions-container'>
                        <h3>Ingredientes</h3>
                        <ul>
                            <li>{recepi.strIngredient1}</li>
                            <li>{recepi.strIngredient2}</li>
                            <li>{recepi.strIngredient3}</li>
                            <li>{recepi.strIngredient4}</li>
                            <li>{recepi.strIngredient5}</li>
                            <li>{recepi.strIngredient6}</li>                
                        </ul>
                        <h3>Modo de preparo</h3>
                        <p>{recepi.strInstructions}</p>
                    </div>
                </div>
        </>
    ) : <p>carregando....</p>;
};

export default Recepi;