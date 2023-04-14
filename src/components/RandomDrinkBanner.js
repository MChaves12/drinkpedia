import { Link } from 'react-router-dom'
import bannerImg from '../assets/barman.jpg';


function RandomDrinkBanner () {
    return(
        <div className='sujestao-container'>
            <div>
                <img className='sujestao-img' src={bannerImg} alt='barman'></img>
            </div>
            <div className='sujestao-description'>
                <h2>Não sabe por onde começar?</h2>
                <h4>Veja uma sujestão do nosso bartender.</h4>
                <Link className=''><button className='sujestao-btn'>Me indique um drink</button></Link>
            </div>
        </div> 
    );
};

export default RandomDrinkBanner;