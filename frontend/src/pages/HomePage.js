import React, { useState, useEffect } from 'react';
import './HomePage.css'; // Importing CSS for styling
import { Link } from 'react-router-dom';

const images = [
  require('../pages/images/hero1.jpg'), // Update with actual image paths
  require('../pages/images/hero2.jpg'),
  require('../pages/images/hero3.jpg'),
  require('../pages/images/hero4.jpg')
];

const HomePage = () => {
  const recipes = [
    // ... (your existing recipe data)
    {
      id: 1,
      name: "Spaghetti Carbonara",
      image: require('../pages/images/spaghettiallacarbona.jpg'),
      description: "Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
      price: "Rs.600",
      category: "Italian",
      rating: 4.5,
      dietary: ["Non-Veg"],
      imageStyle: { width: '184.6px', height: '184.6px', objectFit: 'cover', borderRadius: '10px' }
    },

    {
      id: 2,
      name: "Chicken Curry",
      image: require('../pages/images/chicken curry.jpg'),
      description: "A rich and spicy chicken curry, perfect with rice.",
      price: "Rs.400",
      category: "Indian",
      rating: 4.2,
      dietary: ["Non-Veg"]
    },
    {
      id: 3,
      name: "Grilled Cheese Sandwich",
      image: require('../pages/images/Grilled-Cheese.jpg'),
      description: "A simple and delicious grilled cheese sandwich.",
      price: "Rs.200",
      category: "American",
      rating: 4.0,
      dietary: ["Vegetarian"]
    },
    {
      id: 4,
      name: "Caesar Salad",
      image: require('../pages/images/Low-carb-Caesar-salad-4.jpg'),
      description: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.",
      price: "Rs.100",
      category: "Vegetarian",
      rating: 4.3,
      dietary: ["Vegetarian"]
    },
    {
      id: 5,
      name: "Sushi Rolls",
      image: require('../pages/images/rolls.webp'),
      description: "Fresh sushi rolls with salmon, avocado, and cucumber.",
      price: "Rs.200",
      category: "Asian",
      rating: 4.7,
      dietary: ["Non-Veg"]
    },
    {
      id: 6,
      name: "Pancakes",
      image: require('../pages/images/gimlet-recipe.jpg'),
      description: "Fluffy pancakes served with syrup and butter.",
      price: "Rs.300",
      category: "Desserts",
      rating: 4.1,
      dietary: ["Vegetarian"]
    },
    {
      id: 7,
      name: "Biryani",
      image: require('../pages/images/biryani.jpg'),
      description: "Spiced biryani layered with tender meat and fragrant basmati rice.",
      price: "Rs. 500",
      category: "Indian",
      rating: 4.1,
      dietary: ["Non-Veg"]
    },

    {
      id: 8,
      name: "IceCream",
      image: require('../pages/images/ice.jpg'),
      description: "Creamy ice cream served in a cone with rich and delicious flavors.",
      price: "Rs.300",
      category: "Indian",
      rating: 4.1,
      dietary: ["Vegetarian"]
    },
    {
      id: 9,
      name: "Margherita Pizza",
      image: require('../pages/images/9.jpeg'),
      description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
      price: "Rs.350",
      category: "Italian",
      rating: 4.7,
      dietary: ["Vegetarian"]
    },
    {
      id: 10,
      name: "Butter Chicken",
      image: require('../pages/images/10.jpg'),
      description: "Rich and creamy Indian chicken curry with a smooth butter-based sauce.",
      price: "Rs.400",
      category: "Indian",
      rating: 4.6,
      dietary: ["Non-Veg"]
    },
    {
      id: 11,
      name: "Cheeseburger",
      image: require('../pages/images/11.jpg'),
      description: "Juicy beef patty with cheddar cheese, lettuce, and tomato in a soft bun.",
      price: "Rs.250",
      category: "American",
      rating: 4.5,
      dietary: ["Non-Veg"]
    },
    {
      id: 12,
      name: "Egg Roll",
      image: require('../pages/images/12.jpg'),
      description: "Fresh egg rolls with a variety of egg and vegetables wrapped in seaweed.",
      price: "Rs.100",
      category: "Asian",
      rating: 4.8,
      dietary: ["Non-Veg"]
    },
    {
      id: 13,
      name: "Veggie Stir Fry",
      image: require('../pages/images/13.jpg'),
      description: "A colorful mix of vegetables stir-fried with soy sauce and sesame oil.",
      price: "Rs.200",
      category: "Asian",
      rating: 4.4,
      dietary: ["Vegetarian"]
    },
    {
      id: 14,
      name: "Tiramisu",
      image: require('../pages/images/14.jpg'),
      description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone.",
      price: "Rs.350",
      category: "Desserts",
      rating: 4.9,
      dietary: ["Vegetarian"]
    },
    {
      id: 15,
      name: "Falafel Wrap",
      image: require('../pages/images/15.webp'),
      description: "Crispy falafel balls wrapped in a pita with lettuce, cucumber, and tahini sauce.",
      price: "Rs.220",
      category: "Vegetarian",
      rating: 4.6,
      dietary: ["Vegetarian"]
    },
    {
      id: 16,
      name: "Chocolate Lava Cake",
      image: require('../pages/images/16.jpg'),
      description: "Decadent chocolate cake with a molten center, served with a scoop of vanilla ice cream.",
      price: "Rs.280",
      category: "Desserts",
      rating: 4.7,
      dietary: ["Vegetarian"]
    },
  ];

  const categoryImages = [
    { name: "Italian", image: require('../pages/images/ital.webp') },
    { name: "Indian", image: require('../pages/images/indi.jpg') },
    { name: "American", image: require('../pages/images/ame.jpeg') },
    { name: "Asian", image: require('../pages/images/aisa.jpeg') },
    { name: "Vegetarian", image: require('../pages/images/vege.webp') },
    { name: "Desserts", image: require('../pages/images/dessert.gif') }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 4; // Show 4 recipes per page

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Customer reviews data
  const customerReviews = [
    {
      id: 1,
      name: "Krishna",
      image: require('../pages/images/profile.jpg'),
      review: "Easy to use and love the variety of recipes offered.",
      rating: 5
    },
    {
      id: 2,
      name: "Omnarayan",
      image: require('../pages/images/b2.jpg'),
      review: "Great platform with a wide range of delicious recipes!",
      rating: 4
    },
    {
      id: 3,
      name: "Hiranand",
      image: require('../pages/images/b3.webp'),
      review: "User-friendly and perfect for discovering new dishes.",
      rating: 5
    },
    {
      id: 4,
      name: "Santosh",
      image: require('../pages/images/b4.jpg'),
      review: "A smooth, modern platform with lots of great recipe options.",
      rating: 4
    },
    {
      id: 5,
      name: "Pintu",
      image: require('../pages/images/b5.jpg'),
      review: "Fantastic experience sharing and discovering tasty recipes!",
      rating: 5
    }

  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % customerReviews.length);
    }, 5000); // Change review every 5 seconds
    return () => clearInterval(reviewInterval);
  }, []);

  const filteredRecipes = recipes.filter(recipe =>
    (selectedCategory === '' || recipe.category === selectedCategory) &&
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5; // Show up to 5 page numbers
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const currentRecipess = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));


  return (
    <div className="home-page">
      <header className="header">
        <div className="header-left">
          <div
            className="logo"
            style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '36px',
              fontWeight: 'bold'
            }}
          >
            <span
              className="logo-part1"
              style={{
                color: '#FF6347',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => (e.target.style.color = '#FF4500')}
              onMouseOut={(e) => (e.target.style.color = '#FF6347')}
            >
              Food
            </span>
            <span
              className="logo-part2"
              style={{
                color: '#4CAF50',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => (e.target.style.color = '#388E3C')}
              onMouseOut={(e) => (e.target.style.color = '#4CAF50')}
            >
              Recipe
            </span>
          </div>

          <div className="header-actions">
            <a href="/" className="home-btn-link">
              <button className="home-btn">Home</button>
            </a>
            <a href="/login" className="login-btn-link">
              <button className="login-btn">Login</button>
            </a>
          </div>
        </div>
        <div className="header-right">
          <div className="search-bar">
            <label>Search: </label>
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="cart-logo" onClick={() => setShowCart(!showCart)}></div>
        </div>
      </header>

      {showCart && (
        <div className="cart-modal">
          <h3>Saved Items:</h3>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
          <button
            onClick={() => setShowCart(false)}
            style={{
              display: "block",
              margin: "10px auto",
              backgroundColor: "#FF4C4C",  // Red color for visibility
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Close
          </button>

        </div>
      )}

      <section
        className="hero-section"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="hero-content">
          <h1>Welcome to the World of Delicious Recipes</h1>
          <p>Explore new recipes and find your favorite dishes</p>
        </div>
      </section>

      <section className="categories-section">
        <h2>Browse by Categories</h2>
        <div className="categories-list">
          {categoryImages.map((category, index) => (
            <div
              key={index}
              className="category-item"
              onClick={() => setSelectedCategory(category.name)}
            >
              <img src={category.image} alt={category.name} className="category-image" />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="recipe-grid-section">
        <h2 style={{ textAlign: 'center', margin: '20px 0', width: '100%' }}>Featured Recipes</h2>

        <div className="recipe-grid">
          {currentRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-item">
              <img src={recipe.image} alt={recipe.name} className="recipe-image" />
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
              <p>{recipe.category} | {recipe.price}</p>

              {/* Buttons placed in vertical order (Top, Middle, Bottom) */}
              <div className="recipe-actions">
                <Link to={`/recipe/${recipe.id}`}>
                  <button
                    className="recipe-btn view-details"
                    style={{
                      width: '97%',  // Adjust the width
                      maxWidth: '250px', // Optional: Set a max width
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      padding: '10px 40px',
                    }}
                  >
                    View Details
                  </button>

                </Link>

                <button onClick={() => setCart([...cart, recipe])} className="recipe-btn save-btn">
                  Save
                </button>

                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: "Check out this recipe!",
                        text: "Hey! Look at this delicious recipe:",
                        url: `${window.location.href}/recipe/${recipe.id}`,
                      })
                        .then(() => console.log("Shared successfully!"))
                        .catch((error) => console.log("Error sharing:", error));
                    } else {
                      alert("Sharing not supported on this browser.");
                    }
                  }}
                  className="recipe-btn share-btn"
                >
                  Share Recipe
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          {getPageNumbers().map((page) => (
            <button key={page} onClick={() => handlePageChange(page)} className={currentPage === page ? 'active' : ''}>
              {page}
            </button>
          ))}
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>

      </section>

      {/* Customer Reviews Section */}
      <section className="customer-reviews">
        <h2 style={{ textAlign: 'center' }}>Customer Reviews</h2>
        <div className="review-slider">
          {customerReviews.map((review, index) => (
            <div
              key={review.id}
              className={`review-item ${index === currentReviewIndex ? 'active' : ''}`}
            >
              <img src={review.image} alt={review.name} className="review-image" />
              <h3>{review.name}</h3>
              <p>{review.review}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Foodie. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;