import React from 'react';
import PlantCard from '../components/PlantCard';
import { plants } from '../data';
import './Products.css';

const Products = () => {
  const categories = [...new Set(plants.map(plant => plant.category))];
  
  return (
    <div className="products-container">
      <h1>Bitkilərimiz</h1>
      
      {categories.map(category => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="plants-grid">
            {plants
              .filter(plant => plant.category === category)
              .map(plant => (
                <PlantCard key={plant.id} plant={plant} />
              ))
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
