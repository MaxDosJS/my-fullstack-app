import React, { useState, useEffect } from 'react';
import './carousel.css';

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [imageData, setImageData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
 
    fetch('https://silverboxserver.onrender.com/uploads/carousel')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching carousel images:', error));


    const sampleData = [
      { caption: 'Кольцо', description: 'Teosa FF', price: '6500тг' },
      { caption: 'Браслет', description: 'АЛЬКОР', price: '17000тг'},
      { caption: 'Цепочка', description: 'Серебро России', price: '6000тг'},
      { caption: 'Серьги', description: 'Алькор', price: '23400тг'},
      { caption: 'Картина 5', description: 'Описание для картины 5', price: '2000тг'},
      { caption: 'Картина 6', description: 'Описание для картины 6', price: '2500тг'},
      
    ];

    setImageData(sampleData);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="carousel">
      {images.length > 0 && imageData.length > 0 && (
        <div className='carousel_content'>
          {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
            <div key={index} className='carousel_item'>
              <img
                src={`https://silverboxserver.onrender.com/uploads/carousel/${image}`}
                alt={`Image ${currentIndex + index}`}
                style={{ maxWidth: '280px', height: 'auto' }}
              />
              <h2 className='h2_carousel'>{imageData[currentIndex + index].caption}</h2>
              <p className='p_carousel'>{imageData[currentIndex + index].description}</p>
              <p className='p_carousel'>{imageData[currentIndex + index].price}</p>
            </div>
          ))}
        </div>
      )}

       <div className='arrow'>
                <div className="arrow_left" onClick={handlePrev}>
                  <img src='./img/line_img/line_left.png' alt='Left Arrow' />
                 </div>

             <div className="arrow_right" onClick={handleNext}>
               <img src='./img/line_img/line_right.png' alt='Right Arrow' />
              </div>
      </div>
      
    </div>
  );
};

export default Carousel;