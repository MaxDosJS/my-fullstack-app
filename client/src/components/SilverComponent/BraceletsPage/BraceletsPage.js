import React, { useState, useEffect } from "react";
import "../SilverPage.css";
import Footer from "../../../pages/footer/footer";

const BraceletsPage = () => {
  const [braceletsImages, setBraceletsImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    fetch("https://silverboxserver.onrender.com/uploads/bracelets")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setBraceletsImages(data))
      .catch((error) =>
        console.error("Error fetching bracelets images:", error)
      );
  }, []);

  const imageUrls = [
    "https://kaspi.kz/shop/p/serebro-rossii-br-005-dlina-20-sm-ves-3-24-g-serebro-pletenie-jakornoe-110799284/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/1314001-372146d-dlina-20-sm-ves-8-85-g-serebro-pletenie-rollo-114113175/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/1314001-541122d-dlina-17-sm-ves-5-20-g-serebro-pletenie-rollo-114113177/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/serebro-rossii-br-01sch-dlina-18-sm-ves-2-02-g-serebro-pletenie-otsutstvuet-112352483/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/al-kor-05-1317-0emz-00-dlina-18-sm-ves-4-94-g-serebro-pletenie-romb-110073625/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/krasnaja-presnja-73013060-dlina-19-sm-ves-9-20-g-serebro-pletenie-otsutstvuet-116289766/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/kristall-l-b-05-22-dlina-20-sm-ves-13-85-g-serebro-pletenie-otsutstvuet-116868834/?c=710000000&m=1314001"

  ];

  const totalPages = Math.ceil(braceletsImages.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleBracelets = braceletsImages.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="silver-page">
      <h1>браслеты</h1>
      <div className="silver-page_h2">
        <h2>Дорогие покупатели, при нажатии на изображение товара вы перейдете в магазин Каспи. Там вы сможете приобрести весь ассортимент товаров в рассрочку 0-0-12.</h2>
        </div>
      
      <div className="silver-container">
        {visibleBracelets.map((image, index) => (
          <a
            key={index}
            href={imageUrls[startIndex + index]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`https://silverboxserver.onrender.com/uploads/bracelets/${image}`}
              alt={`Bracelet ${startIndex + index}`}
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
      
      <Footer customStyles={{ paddingTop: "200px" }} />
    </div>
  );
};

export default BraceletsPage;