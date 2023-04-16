import errorImg from '../assets/errorPageImg.jpg'
function ErrorPage(){
    return(
<div>
<p className='error-p'>Drink não encontrado, busque outro!!</p>
<img className='error-img' src={errorImg} alt='Drink Nao Encontrado!'></img>
    </div>
    )
};

export default ErrorPage;