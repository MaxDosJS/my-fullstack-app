import React, { useState, useEffect } from "react";
import "./SilverPage.css";
import Footer from "../../pages/footer/footer";

const CufflinksPage = () => {
  const [cufflinksImages, setCufflinksImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    fetch("http://localhost:3001/uploads/cuflinks")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setCufflinksImages(data))
      .catch((error) =>
        console.error("Error fetching cufflinks images:", error)
      );
  }, []);

  const imageUrls = [
    "https://kaspi.kz/shop/p/brosh-serebro-rossii-br-011r216-ves-2-12-g-serebro-oniks-114736066/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/znachok-al-kor-04-1663-oem-00-ves-1-86-g-serebro-emal--113608560/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/brosh-al-kor-04-2300-em69-00-ves-7-31-g-serebro-fianit-emal--110457976/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/znachok-serebro-rossii-zn-1002ch-ves-6-92-g-serebro-bez-vstavok-114825197/?c=710000000&m=1314001",
  ];

  const totalPages = Math.ceil(cufflinksImages.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleCufflinks = cufflinksImages.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="silver-page">
      <h1>Запонки</h1>
      <div className="silver-page_h2">
        <h2>
          Дорогие покупатели, при нажатии на изображение товара вы перейдете в
          магазин Каспи. Там вы сможете приобрести весь ассортимент товаров в
          рассрочку 0-0-12.
        </h2>
      </div>
      <div className="silver-container">
        {visibleCufflinks.map((image, index) => (
          <a
            key={index}
            href={imageUrls[startIndex + index]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`http://localhost:3001/uploads/cuflinks/${image}`}
              alt={`Cufflinks ${startIndex + index}`}
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

export default CufflinksPage;
