import React, { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  //stan przechowujący listę przepisów
  const [recipes, setRecipes] = useState([]);
  //stan przechowujący aktualnie wybrany przepis
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  //funkcja wywoływana po pierwszym renderowaniu komponentu, pobierająca przykładowe przepisy
  useEffect(() => {
    //funkcja asynchroniczna pobierająca przykładowe przepisy
    const fetchRecipes = async () => {
      try {
        //wywołanie API do pobrania przykładowych przepisów
        const response = await fetch('https://api.edamam.com/search?q=chicken&app_id=da3634ce&app_key=ddcc4d3f820a36162e31805f0b52efe9');
        const data = await response.json();
        //ustawienie pobranych przepisów w stanie recipes
        setRecipes(data.hits);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    //wywołanie funkcji pobierającej przykładowe przepisy
    fetchRecipes();
  }, []); //pusta tablica zależności oznacza, że hook useEffect wywoła się tylko raz po pierwszym renderowaniu

  //funkcja obsługująca wyszukiwanie przepisów
  const handleSearch = async (query) => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=da3634ce&app_key=ddcc4d3f820a36162e31805f0b52efe9`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  //funkcja obsługująca wybór przepisu
  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  //funkcja obsługująca zamknięcie szczegółów przepisu
  const handleCloseDetails = () => {
    setSelectedRecipe(null);
  };

  return (
    <Container>
      {}
      <Header />
      <Box mt={2}>
        {}
        <SearchBar onSearch={handleSearch} />
      </Box>
      <Box mt={2}>
        {}
        <RecipeList recipes={recipes} onRecipeSelect={handleRecipeSelect} />
      </Box>
      {selectedRecipe && (
        <RecipeDetails
          open={Boolean(selectedRecipe)}
          onClose={handleCloseDetails}
          recipe={selectedRecipe}
        />
      )}
    </Container>
  );
}

export default App;