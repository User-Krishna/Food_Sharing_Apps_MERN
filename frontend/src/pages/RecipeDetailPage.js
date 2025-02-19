import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './details.css';

const RecipeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedRecipe, setUpdatedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = () => {
      const recipes = [
        {
          id: 1,
          name: "Spaghetti Carbonara",
          image: require('../pages/images/spaghettiallacarbona.jpg'),
          description: "Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
          price: "Rs.600",
          category: "Italian",
          rating: 4.5,
          dietary: ["Non-Veg"],
          cookingTime: "20 minutes",
          servings: 2,
          ingredients: ["Spaghetti", "Eggs", "Parmesan cheese", "Pancetta", "Black pepper"],
          instructions: "Boil spaghetti. Fry pancetta until crispy. Mix eggs and cheese, add cooked pasta and pancetta, toss well."
        },
        {
          id: 2,
          name: "Chicken Curry",
          image: require('../pages/images/chicken curry.jpg'),
          description: "A rich and spicy chicken curry, perfect with rice.",
          price: "Rs.400",
          category: "Indian",
          rating: 4.2,
          dietary: ["Non-Veg"],
          cookingTime: "45 minutes",
          servings: 4,
          ingredients: ["Chicken", "Onions", "Tomato", "Curry powder", "Ginger", "Garlic", "Coconut milk"],
          instructions: "Saute onions and garlic, add chicken and spices, cook until tender, add coconut milk and simmer."
        },
        {
          id: 3,
          name: "Grilled Cheese Sandwich",
          image: require('../pages/images/Grilled-Cheese.jpg'),
          description: "A simple and delicious grilled cheese sandwich.",
          price: "Rs.200",
          category: "American",
          rating: 4.0,
          dietary: ["Vegetarian"],
          cookingTime: "15 minutes",
          servings: 1,
          ingredients: ["Bread", "Cheddar cheese", "Butter"],
          instructions: "Butter the bread, place cheese in between, and grill until golden brown on both sides."
        },
        {
          id: 4,
          name: "Caesar Salad",
          image: require('../pages/images/Low-carb-Caesar-salad-4.jpg'),
          description: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.",
          price: "Rs.100",
          category: "Vegetarian",
          rating: 4.3,
          dietary: ["Vegetarian"],
          cookingTime: "10 minutes",
          servings: 2,
          ingredients: ["Romaine lettuce", "Caesar dressing", "Croutons", "Parmesan cheese"],
          instructions: "Toss lettuce with Caesar dressing, top with croutons and parmesan cheese."
        },
        {
          id: 5,
          name: "Sushi Rolls",
          image: require('../pages/images/rolls.webp'),
          description: "Fresh sushi rolls with salmon, avocado, and cucumber.",
          price: "Rs.200",
          category: "Asian",
          rating: 4.7,
          dietary: ["Non-Veg"],
          cookingTime: "30 minutes",
          servings: 3,
          ingredients: ["Sushi rice", "Salmon", "Avocado", "Cucumber", "Nori (seaweed)", "Soy sauce"],
          instructions: "Cook sushi rice, lay out nori, spread rice, add salmon, avocado, and cucumber, roll and slice."
        },
        {
          id: 6,
          name: "Pancakes",
          image: require('../pages/images/gimlet-recipe.jpg'),
          description: "Fluffy pancakes served with syrup and butter.",
          price: "Rs.300",
          category: "Desserts",
          rating: 4.1,
          dietary: ["Vegetarian"],
          cookingTime: "20 minutes",
          servings: 4,
          ingredients: ["Flour", "Eggs", "Milk", "Baking powder", "Butter", "Maple syrup"],
          instructions: "Mix dry and wet ingredients separately, combine, cook in a pan, serve with syrup."
        },
        {
          id: 7,
          name: "Biryani",
          image: require('../pages/images/biryani.jpg'),
          description: "Spiced biryani layered with tender meat and fragrant basmati rice.",
          price: "Rs.500",
          category: "Indian",
          rating: 4.1,
          dietary: ["Non-Veg"],
          cookingTime: "60 minutes",
          servings: 4,
          ingredients: ["Basmati rice", "Chicken", "Onions", "Tomato", "Ginger", "Garlic", "Biryani masala", "Yogurt"],
          instructions: "Marinate chicken, cook rice with spices, layer rice and chicken, cook together."
        },
        {
          id: 8,
          name: "Ice Cream",
          image: require('../pages/images/ice.jpg'),
          description: "Creamy ice cream served in a cone with rich and delicious flavors.",
          price: "Rs.300",
          category: "Desserts",
          rating: 4.5,
          dietary: ["Vegetarian"],
          cookingTime: "15 minutes",
          servings: 2,
          ingredients: ["Heavy cream", "Milk", "Sugar", "Vanilla extract"],
          instructions: "Whisk ingredients, freeze in an ice cream maker, and serve in cones."
        },
        {
          id: 9,
          name: "Margherita Pizza",
          image: require('../pages/images/9.jpeg'),
          description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
          price: "Rs.350",
          category: "Italian",
          rating: 4.7,
          dietary: ["Vegetarian"],
          cookingTime: "25 minutes",
          servings: 2,
          ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Basil", "Olive oil"],
          instructions: "Spread sauce on dough, top with cheese and basil, bake until golden."
        },
        {
          id: 10,
          name: "Butter Chicken",
          image: require('../pages/images/10.jpg'),
          description: "Rich and creamy Indian chicken curry with a smooth butter-based sauce.",
          price: "Rs.400",
          category: "Indian",
          rating: 4.6,
          dietary: ["Non-Veg"],
          cookingTime: "45 minutes",
          servings: 4,
          ingredients: ["Chicken", "Butter", "Cream", "Tomato", "Garlic", "Ginger", "Garam masala"],
          instructions: "Cook chicken with garlic and spices, add tomato and cream, simmer until thick."
        },
        {
          id: 11,
          name: "Cheeseburger",
          image: require('../pages/images/11.jpg'),
          description: "Juicy beef patty with cheddar cheese, lettuce, and tomato in a soft bun.",
          price: "Rs.250",
          category: "American",
          rating: 4.5,
          dietary: ["Non-Veg"],
          cookingTime: "20 minutes",
          servings: 1,
          ingredients: ["Ground beef", "Cheddar cheese", "Lettuce", "Tomato", "Burger bun", "Ketchup"],
          instructions: "Grill beef patty, assemble with cheese, lettuce, and tomato in a bun."
        },
        {
          id: 12,
          name: "Egg Roll",
          image: require('../pages/images/12.jpg'),
          description: "Fresh egg rolls with a variety of egg and vegetables wrapped in seaweed.",
          price: "Rs.100",
          category: "Asian",
          rating: 4.8,
          dietary: ["Non-Veg"],
          cookingTime: "15 minutes",
          servings: 3,
          ingredients: ["Eggs", "Cucumber", "Carrot", "Seaweed (Nori)", "Soy sauce"],
          instructions: "Scramble eggs, layer on seaweed with vegetables, roll tightly, and slice."
        },
        {
          id: 13,
          name: "Veggie Stir Fry",
          image: require('../pages/images/13.jpg'),
          description: "A colorful mix of vegetables stir-fried with soy sauce and sesame oil.",
          price: "Rs.200",
          category: "Asian",
          rating: 4.4,
          dietary: ["Vegetarian"],
          cookingTime: "20 minutes",
          servings: 2,
          ingredients: ["Bell peppers", "Carrot", "Broccoli", "Soy sauce", "Sesame oil", "Garlic"],
          instructions: "Stir-fry vegetables in oil and garlic, add soy sauce and sesame oil, cook until tender."
        },
        {
          id: 14,
          name: "Tiramisu",
          image: require('../pages/images/14.jpg'),
          description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone.",
          price: "Rs.350",
          category: "Desserts",
          rating: 4.9,
          dietary: ["Vegetarian"],
          cookingTime: "30 minutes",
          servings: 4,
          ingredients: ["Ladyfingers", "Mascarpone cheese", "Espresso", "Cocoa powder", "Sugar"],
          instructions: "Layer coffee-soaked ladyfingers with mascarpone cream, dust with cocoa powder."
        },
        {
          id: 15,
          name: "Falafel Wrap",
          image: require('../pages/images/15.webp'),
          description: "Crispy falafel balls wrapped in a pita with lettuce, cucumber, and tahini sauce.",
          price: "Rs.220",
          category: "Vegetarian",
          rating: 4.6,
          dietary: ["Vegetarian"],
          cookingTime: "25 minutes",
          servings: 2,
          ingredients: ["Chickpeas", "Parsley", "Garlic", "Cumin", "Tahini", "Pita bread"],
          instructions: "Blend chickpeas and spices, form balls, fry, and wrap in pita with veggies."
        },
        {
          id: 16,
          name: "Chocolate Lava Cake",
          image: require('../pages/images/16.jpg'),
          description: "Decadent chocolate cake with a molten center, served with a scoop of vanilla ice cream.",
          price: "Rs.280",
          category: "Desserts",
          rating: 4.7,
          dietary: ["Vegetarian"],
          cookingTime: "30 minutes",
          servings: 2,
          ingredients: ["Dark chocolate", "Butter", "Sugar", "Eggs", "Flour", "Vanilla ice cream"],
          instructions: "Melt chocolate and butter, mix with eggs and flour, bake until edges are set, serve with ice cream."
        }
      ];

      const selectedRecipe = recipes.find(recipe => recipe.id === parseInt(id));
      setRecipe(selectedRecipe);
      setUpdatedRecipe(selectedRecipe);
    };

    fetchRecipeDetails();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  // Handle Edit Button Click
  const handleEdit = () => {
    setEditMode(true);
  };

  // Handle Change in Inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecipe({ ...updatedRecipe, [name]: value });
  };

  // Handle Update
  const handleUpdate = () => {
    setRecipe(updatedRecipe);
    setEditMode(false);
  };

  // Handle Delete
  const handleDelete = () => {
    alert('Recipe deleted successfully!');
    navigate('/');
  };

  return (
    <div className="recipe-detail-container">
      <div className="recipe-detail">
        <div className="recipe-image-container1">
          <img src={recipe.image} alt={recipe.name} className="recipe-image1" />
        </div>

        <div className="recipe-info">
          {editMode ? (
            <>
              <input type="text" name="name" value={updatedRecipe.name} onChange={handleChange} className="edit-input" />
              <textarea name="description" value={updatedRecipe.description} onChange={handleChange} className="edit-textarea" />
              <input type="text" name="price" value={updatedRecipe.price} onChange={handleChange} className="edit-input" />
              <input type="text" name="category" value={updatedRecipe.category} onChange={handleChange} className="edit-input" />
              <input type="text" name="cookingTime" value={updatedRecipe.cookingTime} onChange={handleChange} className="edit-input" />
              <button onClick={handleUpdate} className="update-btn">Update</button>
            </>
          ) : (
            <>
              <h2 className="recipe-title">{recipe.name}</h2>
              <p className="recipe-description">{recipe.description}</p>

              <div className="recipe-additional-details">
                <p><strong>Category:</strong> {recipe.category}</p>
                <p><strong>Price:</strong> {recipe.price}</p>
                <p><strong>Rating:</strong> {recipe.rating} &#9733;</p>
                <p><strong>Dietary Preferences:</strong> {recipe.dietary.join(', ')}</p>
                <p><strong>Cooking Time:</strong> {recipe.cookingTime}</p>
                <p><strong>Servings:</strong> {recipe.servings}</p>
              </div>

              <div className="recipe-ingredients">
                <h3>Ingredients</h3>
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div className="recipe-instructions">
                <h3>How to Cook</h3>
                <p>{recipe.instructions}</p>
              </div>
            </>
          )}

          <button className="edit-btn" onClick={handleEdit}>Edit</button>
          <button className="delete-btn" onClick={handleDelete}>Delete</button>
        </div>
      </div>

      <Link
        to="/"
        className="back-link"
        style={{
          display: 'block',
          textAlign: 'center',
          margin: '20px auto',
          color: '#007bff',
          textDecoration: 'none',
          fontSize: '28px',
          fontWeight: 'bold'
        }}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default RecipeDetailPage;
