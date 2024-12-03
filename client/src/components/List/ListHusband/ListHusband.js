import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListHusband.css'; 

const ListHusband = () => {
  const [gifts, setGifts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/uploads/husband')
      .then(response => setGifts(response.data))
      .catch(error => {
        setError(error);
        console.error('Error fetching gifts for husband:', error);
      });
  }, []);

  return (
    <div>
      {error && <div>Произошла ошибка: {error.message}</div>}
      {gifts.length > 0 && (
        <div className="gift-container">
          
          {gifts.map((gift, index) => (
            <div key={index} className="gift-item">
              {/* <img
                src={`http://localhost:3001/uploads/husband/${gift}`}
                alt={`Gift ${index + 1} for husband`}
                style={{ width: '300px', height: 'auto' }}
              /> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListHusband;