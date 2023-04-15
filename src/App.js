import './App.css';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import HomePage from './pages/HomePage';
import DrinksAlcoolicos from './pages/DrinksAlcoolicos';
import DrinksNaoAlcoolicos from './pages/DrinksSemAlcool';
import Receitas from './pages/Recipe';
import SearchResults from './pages/SearchResults';
import 'bootstrap/dist/css/bootstrap.min.css';
import DrinkAleatorio from './pages/DrinkAleatorio';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/receitas" element={<Receitas />} />
        <Route path="/nonalcooholic" element={<DrinksNaoAlcoolicos />} />
        <Route path="/alcooholic" element={<DrinksAlcoolicos />} />
        <Route path="/aleatorio" element={<DrinkAleatorio />} />
        <Route path="/:idDrink" element={<Receitas />} />
        <Route path="*" element={<p>ErrorPage</p>} />
        <Route path="/search/:search" element={<SearchResults />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
