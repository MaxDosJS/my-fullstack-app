import React, { useState, useEffect } from "react";
import "./../SilverPage.css";
import Footer from "../../../pages/footer/footer";
import { Link } from "react-router-dom";

const RusR = () => {
  const [ringsImages, setRingsImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    fetch("http://localhost:3001/uploads/rings_rus")
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
    "https://kaspi.kz/shop/p/serebro-rossii-1-3370rz200-razmer-17-ves-1-72-g-serebro-fianit-115169132/?c=710000000&m=1314001&sr=3&qid=c5fa99f8c2a3c57e9028d98dec62f957&ref=shared_link",
    "https://kaspi.kz/shop/p/serebro-rossii-sr02730w-cz-tg-razmer-19-ves-2-87-g-serebro-tsirkonii-112293578/?c=710000000&m=1314001&sr=4&qid=c5fa99f8c2a3c57e9028d98dec62f957&ref=shared_link",
    "https://kaspi.kz/shop/p/serebro-rossii-k-2274o-razmer-17-18-18-5-ves-3-12-g-serebro-bez-vstavok-118468812/?c=710000000&m=1314001&sr=10&qid=c5fa99f8c2a3c57e9028d98dec62f957&ref=shared_link",
    "https://kaspi.kz/shop/p/serebro-rossii-k-3523rz00-razmer-18-ves-3-99-g-serebro-fianit-113071969/?c=710000000&m=1314001&sr=13&qid=c5fa99f8c2a3c57e9028d98dec62f957&ref=shared_link",
    "https://kaspi.kz/shop/p/serebro-rossii-cl-42-01-razmer-17-ves-2-67-g-serebro-bez-vstavok-118152749/?c=710000000&m=1314001&sr=14&qid=c5fa99f8c2a3c57e9028d98dec62f957&ref=shared_link",
    "https://kaspi.kz/shop/p/serebro-rossii-tf-42-01-razmer-19-ves-1-39-g-serebro-bez-vstavok-118152759/?c=710000000&m=1314001&sr=19&qid=c5fa99f8c2a3c57e9028d98dec62f957&ref=shared_link",
    "https://kaspi.kz/shop/p/serebro-rossii-1-376r11021-razmer-17-ves-2-47-g-serebro-fianit-112819931/?c=710000000&m=1314001&sr=29&qid=c5fa99f8c2a3c57e9028d98dec62f957&ref=shared_link",
    "https://kaspi.kz/shop/p/serebro-rossii-kdl-002r-razmer-18-17-5-ves-1-39-g-serebro-bez-vstavok-118439858/?c=710000000&m=1314001&sr=26&qid=c5fa99f8c2a3c57e9028d98dec62f957&ref=shared_link"
    

    
   
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
              src={`http://localhost:3001/uploads/rings_rus/${image}`}
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

export default RusR;