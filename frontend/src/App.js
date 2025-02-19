import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RecipeDetailPage from './pages/RecipeDetailPage';

function App() {
  // Store recipes in state
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "Spaghetti Carbonara",
      image: require('./pages/images/spaghettiallacarbona.jpg'),
      description: "Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
      price: "Rs.600",
      category: "Italian",
      rating: 4.5,
      cookingTime: "20 minutes",
      servings: 2
    },
    {
      id: 2,
      name: "Chicken Curry",
      image: require('./pages/images/chicken curry.jpg'),
      description: "A rich and spicy chicken curry, perfect with rice.",
      price: "Rs.400",
      category: "Indian",
      rating: 4.2,
      cookingTime: "45 minutes",
      servings: 4
    }
  ]);

  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage recipes={recipes} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Pass recipes and setRecipes to RecipeDetailPage */}
          <Route path="/recipe/:id" element={<RecipeDetailPage recipes={recipes} setRecipes={setRecipes} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
