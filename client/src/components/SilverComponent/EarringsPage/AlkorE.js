import React, { useState, useEffect } from "react";

import "./../SilverPage.css";
import Footer from "../../../pages/footer/footer";
import { Link } from "react-router-dom";

const AlkorE = () => {
  const [earringsImages, setEarringsImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
 
  const itemsPerPage = 3;


  useEffect(() => {
    fetch("http://localhost:3001/uploads/earrings_alkor")
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
    "https://kaspi.kz/shop/p/ser-gi-al-kor-02-3813-000b-00-ves-3-38-g-serebro-zoloto-brilliant-115750270/?c=113433100&m=1314001&sr=1&ref=shared_link",
    "https://kaspi.kz/shop/p/ser-gi-al-kor-02-1843-000b-00-ves-2-1-g-serebro-brilliant-101088183/?c=113433100&m=1314001&sr=2&ref=shared_link",
    "https://kaspi.kz/shop/p/ser-gi-al-kor-02-3036-em24-00-ves-3-6-g-serebro-emal--105081614/?c=113433100&m=1314001&sr=8&ref=shared_link",
    "https://kaspi.kz/shop/p/ser-gi-al-kor-02-2864-000b-00-ves-3-27-g-serebro-brilliant-109842991/?c=113433100&m=1314001&sr=16&ref=shared_link",
    "https://kaspi.kz/shop/p/ser-gi-al-kor-02-2835-00kts-00-ves-6-92-g-serebro-fianit-109959905/?c=113433100&m=1314001&sr=19&ref=shared_link",
    "https://kaspi.kz/shop/p/ser-gi-al-kor-02-3096-00kts-00-ves-6-88-g-serebro-fianit-112517069/?c=113433100&m=1314001&sr=38&ref=shared_link",
    "https://kaspi.kz/shop/p/ser-gi-al-kor-02-1992-kts11-00-ves-5-29-g-serebro-fianit-112534439/?c=113433100&m=1314001&sr=43&ref=shared_link",
    "https://kaspi.kz/shop/p/ser-gi-al-kor-02-2834-00kts-00-ves-6-59-g-serebro-fianit-112550806/?c=113433100&m=1314001&sr=51&ref=shared_link",
    "https://kaspi.kz/shop/p/ser-gi-al-kor-02-3288-000b-00-ves-6-35-g-serebro-brilliant-112550812/?c=113433100&m=1314001&sr=53&ref=shared_link"
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
                src={`http://localhost:3001/uploads/earrings_alkor/${image}`}
                alt={`eararkol ${startIndex + index}`}
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
         
         
            <h4 className="module_block_h2">Алькор</h4>
          
        </div>
        <div className="module_block">
        <Link to={"/gifts/wife/earrings/RedE"} style={{textDecoration: 'None',}}>
           <h4 className="module_block_h2">Красная пресня</h4>
          </Link>
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

export default AlkorE;