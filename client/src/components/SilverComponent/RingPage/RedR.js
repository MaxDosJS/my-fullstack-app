import React, { useState, useEffect } from "react";
import "./../SilverPage.css";
import Footer from "../../../pages/footer/footer";
import { Link } from "react-router-dom";

const RedR = () => {
  const [ringsImages, setRingsImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    fetch("https://silverboxserver.onrender.com/uploads/rings_red")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setRingsImages(data))
      .catch((error) => console.error("Error fetching rings images:", error));
  }, []);

  const imageUrls = [
    "https://kaspi.kz/shop/p/krasnaja-presnja-2381725-22-razmer-18-5-ves-3-10-g-serebro-nanosultanit-116289735/?c=710000000&m=1314001&sr=1&qid=e6727311194057edbece2d8c12cdec90&ref=shared_link",
    

    
   
  ];

  const totalPages = Math.ceil(ringsImages.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleRings = ringsImages.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="silver-page">
      <h1>кольца</h1>
      <div className="silver-page_h2">
        <h2>Дорогие покупатели, при нажатии на изображение товара вы перейдете в магазин Каспи. Там вы сможете приобрести весь ассортимент товаров в рассрочку 0-0-12.</h2>
        </div>
      <div className="silver-container">
        {visibleRings.map((image, index) => (
          <a
            key={index}
            href={imageUrls[startIndex + index]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`https://silverboxserver.onrender.com/uploads/rings_red/${image}`}
              alt={`Ring ${startIndex + index}`}
              className="silver-image"
            />
          </a>
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
          <Link to={"/gifts/wife/rings/RusR"} style={{textDecoration: 'None',}}>
           <h4 className="module_block_h2">Серебро россии</h4>
          </Link>
        </div>
        <div className="module_block">
          <Link to={"/gifts/wife/rings/AlkorR"} style={{ textDecoration: 'None',}}>
            <h4 className="module_block_h2">Алькор</h4>
          </Link>
        </div>
        <Link to={"/gifts/wife/rings/RedR"} style={{textDecoration: 'None',}}>
           <h4 className="module_block_h2">Красная пресня</h4>
          </Link>
        <div className="module_block">
        <Link to={"/gifts/wife/rings/CrystallR"} style={{textDecoration: 'None',}}>
           <h4 className="module_block_h2">Кристалл-L</h4>
          </Link>
        </div>
      </div>
      <Footer customStyles={{ paddingTop: "200px" }} />
    </div>
  );
};

export default RedR;