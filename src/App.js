import './App.css';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
//import ByIngredient from './pages/ByIngredient';
import HomePage from './pages/HomePage';
import DrinksAlcoolicos from './pages/DrinksAlcoolicos';
import DrinksNaoAlcoolicos from './pages/DrinksSemAlcool';
import Receitas from './pages/Recipe';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/receitas" element={<Receitas />} />
        <Route path="/drinks-nao-alcoolicos" element={<DrinksNaoAlcoolicos />} />
        <Route path="/drinks-alcoolicos" element={<DrinksAlcoolicos />} />

        <Route path="*" element={<p>ErrorPage</p>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
