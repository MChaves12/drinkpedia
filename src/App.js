import './App.css';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
//import ByIngredient from './pages/ByIngredient';
import DrinksSemAlcool from './pages/DrinksAlcoolicos'

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/*<Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/receitas" element={<Receitas />} />
        <Route path="/drinks-nao-alcoolicos" element={<DrinksNaoAlcoolicos />} />
        <Route path="/drinks-alcoolicos" element={<DrinksAlcoolicos />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>*/}
      <DrinksSemAlcool/>
      <Footer/>
    </div>
  );
}

export default App;
