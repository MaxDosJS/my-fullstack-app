import React, { useState, useEffect } from "react";

import "./../SilverPage.css";
import Footer from "../../../pages/footer/footer";
import { Link } from "react-router-dom";

const RusE = () => {
  const [earringsImages, setEarringsImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
 
  const itemsPerPage = 3;


  useEffect(() => {
    fetch("http://localhost:3001/uploads/earrings_ruse")
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
    "https://kaspi.kz/shop/p/serebro-rossii-k-0132o-razmer-17-5-ves-2-86-g-serebro-bez-vstavok-118304471/?c=710000000&m=1314001&sr=2&qid=c5fa99f8c2a3c57e9028d98dec62f957&ref=shared_link",

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
                src={`http://localhost:3001/uploads/earrings_ruse/${image}`}
                alt={`eruse ${startIndex + index}`}
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
          <h4 className="module_block_h2">Серебро россии</h4>
        </div>
        <div className="module_block">
         
          <Link to="/gifts/wife/earrings/AlkorE" style={{ textDecoration: 'None',}}>
            <h4 className="module_block_h2">Алькор</h4>
          </Link>
          
        </div>
        <Link to={"/gifts/wife/earrings/RedE"} style={{textDecoration: 'None',}}>
           <h4 className="module_block_h2">Красная пресня</h4>
          </Link>
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

export default RusE;