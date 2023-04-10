import './App.css';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import DrinksAlcoolicos from './pages/DrinksAlcoolicos'
import DrinksNaoAlcoolicos from './pages/DrinksSemAlcool'
import Recepi from './pages/Recepi';
import HomePage from './pages/HomePage'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nonalcooholic" element={<DrinksNaoAlcoolicos />} />
        <Route path="/alcooholic" element={<DrinksAlcoolicos />} />
        <Route path="/alcooholic/:idDrink" element={<Recepi />} />
        <Route path="/nonalcooholic/:idDrink" element={<Recepi />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
