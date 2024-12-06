import React, { useState, useEffect } from "react";
import "./../SilverPage.css";
import Footer from "../../../pages/footer/footer";

const PendantPage = () => {
  const [pendantImages, setPendantImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    fetch("https://silverboxserver.onrender.com/uploads/pendants")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setPendantImages(data))
      .catch((error) =>
        console.error("Error fetching pendant images:", error)
      );
  }, []);

  const imageUrls = [
    "https://kaspi.kz/shop/p/podveska-serebro-rossii-3637r-ves-0-86-g-serebro-fianit-112642226/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/podveska-serebro-rossii-p-001z102-ves-1-21-g-serebro-kvarts-112642467/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/krestik-al-kor-03-3398-000b-00-ves-0-80-g-serebro-brilliant-114191768/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/podveska-serebro-rossii-p023ch-ves-2-63-g-serebro-bez-vstavok-114775786/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/podveska-kristall-l-p-05-41-ves-2-g-serebro-bez-vstavok-112934373/?c=750000000&m=1314001",
    "https://kaspi.kz/shop/p/podveska-serebro-rossii-pa-017ch-ves-14000-g-serebro-bez-vstavok-114825188/?c=750000000&m=1314001",
    "https://kaspi.kz/shop/p/krestik-al-kor-03-4076-000b-00-ves-2-54-g-serebro-zoloto-brilliant-118907948/?c=750000000&m=1314001",
    "https://kaspi.kz/shop/p/ikona-al-kor-03-3395-000b-00-ves-1-93-g-serebro-brilliant-115750267/?c=750000000&m=1314001",
    "https://kaspi.kz/shop/p/krestik-serebro-rossii-k3-540-r-ves-1-99-g-serebro-bez-vstavok-118258773/?c=750000000",
    
    
  ];

  const totalPages = Math.ceil(pendantImages.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visiblePendants = pendantImages.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="silver-page">
      <h1>подвески</h1>
      <div className="silver-page_h2">
        <h2>Дорогие покупатели, при нажатии на изображение товара вы перейдете в магазин Каспи. Там вы сможете приобрести весь ассортимент товаров в рассрочку 0-0-12.</h2>
        </div>
      <div className="silver-container">
        {visiblePendants.map((image, index) => (
          <a
            key={index}
            href={imageUrls[startIndex + index]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`https://silverboxserver.onrender.com/uploads/pendants/${image}`}
              alt={`Pendant ${startIndex + index}`}
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
          <h4 className="module_block_h2">Серебро россии</h4>
        </div>
        <div className="module_block">
          <h4 className="module_block_h2">Алькор</h4>
        </div>
        <div className="module_block">
          <h4 className="module_block_h2">Красная пресня</h4>
        </div>
        <div className="module_block">
          <h4 className="module_block_h2">Соколов</h4>
        </div>
      </div>
      <Footer customStyles={{ paddingTop: "200px" }} />
    </div>
  );
};

export default PendantPage;