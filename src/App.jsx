import React from 'react';
import './App.css';

// Dummy data for categories
const categories = [
  { name: '文化歷史', id: 1 },
  { name: '自然風光', id: 2 },
  { name: '冒險活動', id: 3 },
  // ... other categories
];

// Dummy data for featured tours
const featuredTours = [
  { 
    name: '宜蘭傳統藝術之旅', 
    image: '/images/yilan-tour.jpg', 
    description: '探索宜蘭的傳統藝術與手工藝', 
    rating: 4.8 
  },
  // ... other tours
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* ... rest of your component */}
        
        {/* Category Scroller */}
        <div className="category-scroller">
          {categories.map((category) => (
            <button key={category.id} className="category-item">{category.name}</button>
          ))}
        </div>

        {/* Featured Tours */}
        <section className="featured-tours">
          <h2>精選探險</h2>
          <div className="tour-list">
            {featuredTours.map((tour) => (
              <div key={tour.name} className="tour-item">
                <img src={tour.image} alt={tour.name} />
                <div className="tour-info">
                  <h3>{tour.name}</h3>
                  <p>{tour.description}</p>
                  <p>評分: {tour.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
