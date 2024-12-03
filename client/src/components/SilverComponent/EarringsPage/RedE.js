import React, { useState, useEffect } from "react";

import "./../SilverPage.css";
import Footer from "../../../pages/footer/footer";
import { Link } from "react-router-dom";

const RedE = () => {
  const [earringsImages, setEarringsImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
 
  const itemsPerPage = 3;


  useEffect(() => {
    fetch("http://localhost:3001/uploads/earrings_red")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setEarringsImages(data))
      .catch((error) =>
        console.error("Error fetching earrings images:", error)
      );
  }, []);

  const imageUrls = [
    "https://kaspi.kz/shop/p/ser-gi-krasnaja-presnja-33899981-1-ves-8-4-g-serebro-fianit-116289743/?c=113433100&m=1314001&sr=2&ref=shared_link",
    "https://kaspi.kz/shop/p/ser-gi-krasnaja-presnja-33014474-ves-7-20-g-serebro-bez-vstavok-116289747/?c=113433100&m=1314001&sr=4&ref=shared_link",
    "https://kaspi.kz/shop/p/ser-gi-krasnaja-presnja-33012010-ves-7-30-g-serebro-bez-vstavok-116289753/?c=113433100&m=1314001&sr=5&ref=shared_link",
    "https://kaspi.kz/shop/p/ser-gi-krasnaja-presnja-3388230-7-ves-19-40-g-serebro-nanoshpinel--116289776/?c=113433100&m=1314001&sr=11&ref=shared_link",
    "https://kaspi.kz/shop/p/ser-gi-krasnaja-presnja-33614360-ves-5-30-g-serebro-steklo-116504161/?c=113433100&m=1314001&sr=12&ref=shared_link",
    "https://kaspi.kz/shop/p/ser-gi-krasnaja-presnja-33013094-ves-7-80-g-serebro-bez-vstavok-116289744/?c=113433100&m=1314001&sr=3&ref=shared_link",
    "https://kaspi.kz/shop/p/ser-gi-krasnaja-presnja-3381551-22-ves-4-4-g-serebro-nanosultanit-116289736/?c=113433100&m=1314001&sr=8&ref=shared_link"
  ];

  const totalPages = Math.ceil(earringsImages.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

 

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleEarrings = earringsImages.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="silver-page">
      <img
        className="silver_page_icon"
        src="./img/silverpage_img/silver_page1.png"
        alt=""
      />

      <h1>серьги</h1>
      <div className="silver-page_h2">
        <h2>Дорогие покупатели, при нажатии на изображение товара вы перейдете в магазин Каспи. Там вы сможете приобрести весь ассортимент товаров в рассрочку 0-0-12.</h2>
      </div>
      <div className="silver-container">
        {visibleEarrings.map((image, index) => (
          <div key={index} className="bracelet-container">
            <a
              href={imageUrls[startIndex + index]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`http://localhost:3001/uploads/earrings_red/${image}`}
                alt={`eared ${startIndex + index}`}
                className="silver-image"
              />
            </a>
            
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Назад
        </button>
        <span>{`Страница ${currentPage} из ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Вперед
        </button>
      </div>
      <div className="module_brand">
        <div className="module_block">
        <Link to={"/gifts/wife/earrings/RusE"} style={{textDecoration: 'None',}}>
           <h4 className="module_block_h2">Серебро россии</h4>
          </Link>
        </div>
        <div className="module_block">
         
        <Link to="/gifts/wife/earrings/AlkorE" style={{ textDecoration: 'None',}}>
            <h4 className="module_block_h2">Алькор</h4>
          </Link>
          
        </div>
        <div className="module_block">
          <h4 className="module_block_h2">Красная пресня</h4>
        </div>
        <div className="module_block">
        <Link to={"/gifts/wife/earrings/CrystallE"} style={{textDecoration: 'None',}}>
           <h4 className="module_block_h2">Кристалл-L</h4>
          </Link>
        </div>
      </div>
          <Footer customStyles={{ paddingTop: "280px" }} />
    </div>
  );
};

export default RedE;