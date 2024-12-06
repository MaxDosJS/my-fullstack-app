import React, { useState, useEffect } from "react";

import "./../SilverPage.css";
import Footer from "../../../pages/footer/footer";
import { Link } from "react-router-dom";

const CrystallE = () => {
  const [earringsImages, setEarringsImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
 
  const itemsPerPage = 3;


  useEffect(() => {
    fetch("https://silverboxserver.onrender.com/uploads/earrings_crystall")
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
    "https://kaspi.kz/shop/p/ser-gi-kristall-l-s-24-ves-1-5-g-serebro-emal--115225702/?c=113433100&m=1314001&sr=1&qid=5767c0eb1bef92278db9284e62a80379&ref=shared_link",
    "https://kaspi.kz/shop/p/ser-gi-kristall-l-s-05-61-1-ves-6-13-g-serebro-emal--116895537/?c=113433100&m=1314001&sr=4&qid=5767c0eb1bef92278db9284e62a80379&ref=shared_link",
    "https://kaspi.kz/shop/p/ser-gi-kristall-l-s-25-11-kr-ves-3-g-serebro-emal-fianit-114392034/?c=113433100&m=1314001&sr=2&qid=5767c0eb1bef92278db9284e62a80379&ref=shared_link"


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
                src={`https://silverboxserver.onrender.com/uploads/earrings_crystall/${image}`}
                alt={`crystall ${startIndex + index}`}
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
        <Link to={"/gifts/wife/earrings/RedE"} style={{textDecoration: 'None',}}>
           <h4 className="module_block_h2">Красная пресня</h4>
          </Link>
          <Link to={"/gifts/wife/earrings/CrystallE"} style={{textDecoration: 'None',}}>
           <h4 className="module_block_h2">Кристалл-L</h4>
          </Link>
      </div>
          <Footer customStyles={{ paddingTop: "280px" }} />
    </div>
  );
};

export default CrystallE;