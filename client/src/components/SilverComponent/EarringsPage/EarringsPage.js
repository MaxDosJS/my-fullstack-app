import React, { useState, useEffect } from "react";

import "./../SilverPage.css";
import Footer from "../../../pages/footer/footer";
import { Link } from "react-router-dom";

const EarringsPage = () => {
  const [earringsImages, setEarringsImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
 
  const itemsPerPage = 3;


  useEffect(() => {
    fetch("https://silverboxserver.onrender.com/uploads/earrings")
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
    "https://kaspi.kz/shop/p/ser-gi-al-kor-02-2681-oemz-00-ves-8-03-g-serebro-fianit-emal--110457978/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/ser-gi-al-kor-02-3470-brst-00-ves-3-67-g-serebro-sultanit-110952910/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/ser-gi-serebro-rossii-s054r202-ves-2-36-g-serebro-fianit-111155482/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/pusety-serebro-rossii-s-4438-r-ves-4-18-g-serebro-perlamutr-112222769/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/ser-gi-al-kor-02-2835-00kts-00-ves-6-92-g-serebro-fianit-109959905/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/ser-gi-al-kor-02-1256-005b-00-ves-2-49-g-serebro-zoloto-brilliant-112582233/?c=710000000",
    "https://kaspi.kz/shop/p/ser-gi-serebro-rossii-2-3370-1rz200-ves-3-41-g-serebro-fianit-112820842/?c=710000000",
    "https://kaspi.kz/shop/p/ser-gi-serebro-rossii-s-3564r915-ves-2-64-g-serebro-nanorubin-113160943/?c=710000000",
    "https://kaspi.kz/shop/p/ser-gi-serebro-rossii-2-396r-436-ves-4-57-g-serebro-lunnyi-kamen--114736294/?c=710000000"
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
                src={`https://silverboxserver.onrender.com/uploads/earrings/${image}`}
                alt={`Earrings ${startIndex + index}`}
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
          <Link to={"/gifts/wife/earrings/AlkorE"} style={{ textDecoration: 'None',}}>
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

export default EarringsPage;