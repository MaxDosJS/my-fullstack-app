import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListWife = () => {
  const [gifts, setGifts] = useState([]);
  const [error, setError] = useState(null);

  const containerStyles = {
    marginLeft: '100px',
    width: '900px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  };

  const itemStyles = {
    flex: '0 0 32%',
    marginBottom: '16px',
    marginTop: '20px'
  };

  useEffect(() => {
    axios.get('http://localhost:3001/uploads/wife')
      .then(response => setGifts(response.data))
      .catch(error => {
        setError(error);
        console.error('Error fetching gifts for wife:', error);
      });
  }, []);

  return (
    <div>
      {error && <div>Произошла ошибка: {error.message}</div>}
      {gifts.length > 0 && (
        <div className="gift-container" style={containerStyles}>
          {gifts.map((gift, index) => (
            <div className="gift-item" style={itemStyles} key={index}>
              <Link to={`/gifts/wife/${gift.replace(/\.[^/.]+$/, "")}`}>
                <img
                  src={`http://localhost:3001/uploads/wife/${gift}`}
                  alt={`Gift ${index + 1} for wife`}
                  style={{ width: '200px', height: 'auto', position: 'relative', right: "35px", cursor: 'pointer' }}
                />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListWife;