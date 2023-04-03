import { Link } from 'react-router-dom'

function Drink () {
    return(
        <>
        <Link className='drink-link'>
            <div className='drink-recomendado-container'>
                <div className='img-filter'>
                    <div className='drink-recomendado-info'>
                        <h4>Nossa recomedação</h4>
                        <h1>Drink Name</h1>
                    </div>
                </div>
            </div>
        </Link>
        </> 
    );
};

export default Drink;