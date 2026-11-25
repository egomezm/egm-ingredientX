import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { RecipeCarousel } from './components/RecipeCarousel';
import { getRecipe } from './data/recipes';
import { About } from './pages/About';
import { Landing } from './pages/Landing';
import { RecipePage } from './pages/RecipePage';
import './styles/global.css';

export function App() {
  const { pathname } = useLocation();
  const [params] = useSearchParams();
  const recipeParam = params.get('recipe');
  const recipe = getRecipe(recipeParam);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [recipeParam, pathname]);

  return (
    <div className="container">
      <Header hasRecipe={recipeParam !== null} />
      <RecipeCarousel activeId={recipe ? String(recipe.id) : null} />
      <main key={`${pathname}${recipeParam ?? ''}`} className="page">
        {pathname === '/about' ? (
          <About />
        ) : recipeParam === null ? (
          <Landing />
        ) : recipe ? (
          <RecipePage recipe={recipe} />
        ) : (
          <p role="alert">Recipe not found. Pick one from the menu above.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
