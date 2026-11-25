import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { RecipeDetail } from './features/recipes/RecipeDetail';
import { RecipeList } from './features/recipes/RecipeList';
import './styles/global.css';

export function App() {
  return (
    <div className="container">
      <header>
        <h1>Ingredient X</h1>
        <p>Recipes featuring “Ingredient X” by Lalo</p>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
