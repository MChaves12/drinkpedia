import './App.css';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import ByIngredient from './pages/ByIngredient';

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
      <ByIngredient />
      <Footer/>
    </div>
  );
}

export default App;
