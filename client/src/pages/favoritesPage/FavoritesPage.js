import React from "react";

const FavoritesPage = ({ favorites }) => {
  return (
    <div>
      <h1>Избранные товары</h1>
     
      {favorites.map((favorite, index) => (
        <div key={index} className="favorite-item">
          <img
            src={`http://localhost:3001/uploads/earrings/${favorite}`}
            alt={`Favorite Earring ${index + 1}`}
            className="favorite-image"
          />
          
        </div>
      
      ))}
    </div>
  );
};

export default FavoritesPage;