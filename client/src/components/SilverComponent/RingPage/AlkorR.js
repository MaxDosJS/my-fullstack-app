import React, { useState, useEffect } from "react";
import "./../SilverPage.css";
import Footer from "../../../pages/footer/footer";
import { Link } from "react-router-dom";

const AlkorR = () => {
  const [ringsImages, setRingsImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    fetch("https://silverboxserver.onrender.com/uploads/rings_alkor")
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
    "https://kaspi.kz/shop/p/al-kor-01-3648-00sv-00-razmer-18-17-16-5-ves-2-25-g-serebro-fianit-118771491/?c=113433100&m=1314001&sr=5&qid=6f94bedc87e2616dc2b3163880e408e3&ref=shared_link",
    "https://kaspi.kz/shop/p/al-kor-01-3883-00kts-00-razmer-18-5-ves-3-g-serebro-fianit-118907939/?c=113433100&m=1314001&sr=8&qid=6f94bedc87e2616dc2b3163880e408e3&ref=shared_link",
    "https://kaspi.kz/shop/p/al-kor-01-3337-oemz-00-razmer-17-ves-4-39-g-serebro-emal--112550817/?c=113433100&m=1314001&sr=13&qid=6f94bedc87e2616dc2b3163880e408e3&ref=shared_link",
    "https://kaspi.kz/shop/p/al-kor-01-3941-00kts-00-razmer-16-5-18-5-ves-2-83-g-serebro-fianit-118771477/?c=113433100&m=1314001&sr=16&qid=6f94bedc87e2616dc2b3163880e408e3&ref=shared_link",
    "https://kaspi.kz/shop/p/al-kor-01-4096-000b-00-razmer-19-5-ves-3-94-g-serebro-brilliant-118771506/?c=113433100&m=1314001&sr=19&qid=6f94bedc87e2616dc2b3163880e408e3&ref=shared_link",
    "https://kaspi.kz/shop/p/al-kor-01-1300-0kts4-00-razmer-17-5-ves-5-63-g-serebro-fianit-112550871/?c=113433100&m=1314001&sr=23&qid=6f94bedc87e2616dc2b3163880e408e3&ref=shared_link",
    "https://kaspi.kz/shop/p/al-kor-01-3170-00chb-17-razmer-21-5-ves-4-44-g-serebro-brilliant-118771492/?c=113433100&m=1314001&sr=26&qid=6f94bedc87e2616dc2b3163880e408e3&ref=shared_link",
    "https://kaspi.kz/shop/p/al-kor-01-3980-00kts-00-razmer-18-ves-4-07-g-serebro-fianit-118819696/?c=113433100&m=1314001&sr=38&qid=6f94bedc87e2616dc2b3163880e408e3&ref=shared_link",
    
   
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
              src={`https://silverboxserver.onrender.com/uploads/rings_alkor/${image}`}
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

export default AlkorR;