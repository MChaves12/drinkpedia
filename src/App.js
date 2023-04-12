import './App.css';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
<<<<<<< HEAD
//import ByIngredient from './pages/ByIngredient';
//import DrinksAlcoolicos from './pages/DrinksAlcoolicos'
import HomePage from './pages/HomePage';
=======
import DrinksAlcoolicos from './pages/DrinksAlcoolicos';
import DrinksNaoAlcoolicos from './pages/DrinksSemAlcool';
import Recepi from './pages/Recepi';
import HomePage from './pages/HomePage';

import { Route, Routes } from 'react-router-dom';
>>>>>>> 90ce9aff4c8059f0ed9c501d63071636aca570e0

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
        <Route path="/receitas" element={<Receitas />} />
        <Route path="/drinks-nao-alcoolicos" element={<DrinksNaoAlcoolicos />} />
        <Route path="/drinks-alcoolicos" element={<DrinksAlcoolicos />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>*/}
      <HomePage/>
=======
        <Route path="/nonalcooholic" element={<DrinksNaoAlcoolicos />} />
        <Route path="/alcooholic" element={<DrinksAlcoolicos />} />
        <Route path="/:idDrink" element={<Recepi />} />
      </Routes>
>>>>>>> 90ce9aff4c8059f0ed9c501d63071636aca570e0
      <Footer/>
    </div>
  );
}

export default App;
