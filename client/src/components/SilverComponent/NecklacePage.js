import React, { useState, useEffect } from "react";
import "./SilverPage.css";
import Footer from "../../pages/footer/footer";

const NecklacePage = () => {
  const [necklaceImages, setNecklaceImages] = useState([]);
  const [necklacePage, setNecklacePage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    fetch("https://silverboxserver.onrender.com/uploads/necklace")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setNecklaceImages(data))
      .catch((error) =>
        console.error("Error fetching necklace images:", error)
      );
  }, []);

  const imageUrls = [
    "https://kaspi.kz/shop/p/kol-e-al-kor-06-2610-00sv-18-dlina-42-sm-ves-3-g-serebro-fianit-swarovski-102156429/?c=710000000&m=1314001",
    "https://kaspi.kz/shop/p/kol-e-al-kor-06-267000kts-00-50-dlina-50-sm-ves-3-11-g-serebro-fianit-109855955/?c=113433100&m=1314001&sr=1&qid=d4f5dfde6e8a2eae46ddc9abbc777258&ref=shared_link",
    "https://kaspi.kz/shop/p/kol-e-serebro-rossii-55130r-dlina-40-sm-ves-4-g-serebro-bez-vstavok-110326879/?c=113433100&m=1314001&sr=19&qid=d4f5dfde6e8a2eae46ddc9abbc777258&ref=shared_link",
    "https://kaspi.kz/shop/p/kol-e-al-kor-06-3532-00sv-00-dlina-43-sm-ves-3-08-g-serebro-fianit-116183674/?c=113433100&m=1314001&sr=20&qid=d4f5dfde6e8a2eae46ddc9abbc777258&ref=shared_link",
    "https://kaspi.kz/shop/p/kol-e-al-kor-06-3141-000b-00-dlina-45-sm-ves-2-21-g-zoloto-serebro-brilliant-116156479/?c=113433100&m=1314001&sr=25&qid=d4f5dfde6e8a2eae46ddc9abbc777258&ref=shared_link",
    "https://kaspi.kz/shop/p/kol-e-al-kor-06-3361-000b-00-dlina-45-sm-ves-3-g-serebro-brilliant-emal--112534685/?c=113433100&m=1314001&sr=36&qid=d4f5dfde6e8a2eae46ddc9abbc777258&ref=shared_link",
    "https://kaspi.kz/shop/p/kol-e-al-kor-06-3693-0000-00-dlina-45-sm-ves-4-98-g-serebro-bez-vstavok-112602308/?c=113433100&m=1314001&sr=45&qid=d4f5dfde6e8a2eae46ddc9abbc777258&ref=shared_link",
    "https://kaspi.kz/shop/p/kol-e-al-kor-06-2980-10kts-00-dlina-45-sm-ves-1-25-g-serebro-fianit-112601888/?c=113433100&m=1314001&sr=44&qid=d4f5dfde6e8a2eae46ddc9abbc777258&ref=shared_link",
    "https://kaspi.kz/shop/p/kol-e-al-kor-06-2912-00kts-00-dlina-45-sm-ves-2-86-g-serebro-fianit-110885045/?c=113433100&m=1314001&sr=42&qid=d4f5dfde6e8a2eae46ddc9abbc777258&ref=shared_link",
  ];

  const totalPages = Math.ceil(necklaceImages.length / itemsPerPage);

  const handleNextPage = () => {
    setNecklacePage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setNecklacePage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (necklacePage - 1) * itemsPerPage;
  const visibleNecklace = necklaceImages.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="silver-page">
      <h1>Колье</h1>
      <div className="silver-page_h2">
        <h2>
          Дорогие покупатели, при нажатии на изображение товара вы перейдете в
          магазин Каспи. Там вы сможете приобрести весь ассортимент товаров в
          рассрочку 0-0-12.
        </h2>
      </div>
      <div className="silver-container">
        {visibleNecklace.map((image, index) => (
          <a
            key={index}
            href={imageUrls[startIndex + index]}
            target="_blank"
            rel="noopener noreferrer"
            
          >
            <img
              src={`https://silverboxserver.onrender.com/uploads/necklace/${image}`}
              alt={`necklace ${startIndex + index}`}
              className="silver-image"
              
            />
          </a>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={necklacePage === 1}>
          Назад
        </button>
        <span>{`Страница ${necklacePage} из ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={necklacePage === totalPages}>
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

export default NecklacePage;