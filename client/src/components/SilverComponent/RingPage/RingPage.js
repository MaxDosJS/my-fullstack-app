import React, { useState, useEffect } from "react";
import "./../SilverPage.css";
import Footer from "../../../pages/footer/footer";
import { Link } from "react-router-dom";

const RingPage = () => {
  const [ringsImages, setRingsImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    fetch("http://localhost:3001/uploads/rings")
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
    "https://kaspi.kz/shop/p/krasnaja-presnja-2389997-razmer-18-ves-6-9-g-serebro-fianit-101615309/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/al-kor-01-2966-00kts-00-razmer-18-ves-3-66-g-serebro-fianit-110831146/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/al-kor-01-1598-00kts-00-razmer-18-ves-3-45-g-serebro-fianit-110831151/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/serebro-rossii-k-7623rch41609-razmer-18-5-ves-2-98-g-serebro-agat-shpinel--112317331/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/serebro-rossii-sr02730w-cz-tg-razmer-19-ves-2-87-g-serebro-tsirkonii-112293578/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/al-kor-01-2536-00sv-00-razmer-17-ves-2-63-g-serebro-fianit-113161031/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/serebro-rossii-1-3370rz200-razmer-17-ves-1-72-g-serebro-fianit-115169132/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/al-kor-01-2875-000b-00-razmer-17-ves-1-37-g-serebro-zoloto-brilliant-115663973/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/al-kor-01-3980-00kts-00-razmer-18-ves-4-07-g-serebro-fianit-118819696/?c=710000000&m=1314001"
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
              src={`http://localhost:3001/uploads/rings/${image}`}
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

export default RingPage;