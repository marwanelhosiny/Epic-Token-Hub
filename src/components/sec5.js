import { useState } from "react";
import content from "../json/En-Ar.json";
import image1 from "../imgs/des1.jpg";
import image2 from "../imgs/des2.jpg";
import image3 from "../imgs/des3.jpg";
import image4 from "../imgs/des4.jpg";
import image5 from "../imgs/des5.jpg";
import image6 from "../imgs/web1.png";
import image7 from "../imgs/web2.png";
import image8 from "../imgs/web3.png";
import image9 from "../imgs/web4.png";
import image10 from "../imgs/web5.png";
import image11 from "../imgs/soc1.jpg";
import image12 from "../imgs/soc2.jpg";
import image13 from "../imgs/soc3.jpg";
import image14 from "../imgs/soc4.jpg";
import image15 from "../imgs/soc5.jpg";

const Sec5 = ({ language }) => {
  const { heading, all, items } =
    language === "arabic"
      ? content.arabicContentSec5
      : language === "english"
      ? content.englishContentSec5
      : language === "italian"
      ? content.italianContentSec5
      : content.spanishContentSec5;
  const [filterType, setFilterType] = useState("all");
  const [modalImage, setModalImage] = useState(null);

  const handleFilter = (type) => {
    setFilterType(type);
  };

  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  const filteredItems =
    filterType === "all"
      ? items
      : items.filter((item) => item.type === filterType);
  const uniqueTypes = [...new Set(items.map((item) => item.type))];

  return (
    <section className="w-100 bg-dark vh-100s" id="Works">
      <div className="container">
        <h2 className="pt-5 text-white text-center mb-5">{heading}</h2>
        <div className="row" id="projectsHtml">
          <div className="col-12 mb-3 text-start">
            <button
              className={`btn btn-white mx-2 my-2 fs-5 ${
                filterType === "all" ? "activee" : ""
              }`}
              onClick={() => handleFilter("all")}
            >
              {all}
            </button>
            {uniqueTypes.map((type, index) => (
              <button
                key={index}
                className={`btn btn-white mx-2 my-2 fs-5 ${
                  filterType === type ? "activee" : ""
                }`}
                onClick={() => handleFilter(type)}
              >
                {type}
              </button>
            ))}
          </div>
          {filteredItems.map((item, index) => (
            <div className="col-11 col-lg-4 mb-5" key={index}>
              <article className="article-wrapper m-auto">
                <div className="rounded-lg">
                  <img
                    src={getImagesByPath(item.image)}
                    className="img-fluid"
                    alt={item.name}
                    onClick={() =>
                      handleImageClick(getImagesByPath(item.image))
                    }
                  />
                </div>
                <div className="project-info">
                  <div className="flex-pr">
                    <div className="project-title text-nowrap">{item.name}</div>
                    <div className="project-hover">
                      <svg
                        style={{ color: "black" }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="2em"
                        height="2em"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <line y2="12" x2="19" y1="12" x1="5"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <span className="project-type">• {item.type}</span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
        {modalImage && (
          <div className="modal" onClick={handleCloseModal}>
            <div className="modal-content bg-transparent">
              <img src={modalImage} alt="Modal" className="m-auto w-50" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const getImagesByPath = (path) => {
  let imageSrc = "";
  switch (path) {
    case "./imgs/des1.jpg":
      imageSrc = image1;
      break;
    case "./imgs/des2.jpg":
      imageSrc = image2;
      break;
    case "./imgs/des3.jpg":
      imageSrc = image3;
      break;
    case "./imgs/des4.jpg":
      imageSrc = image4;
      break;
    case "./imgs/des5.jpg":
      imageSrc = image5;
      break;
    case "./imgs/web1.png":
      imageSrc = image6;
      break;
    case "./imgs/web2.png":
      imageSrc = image7;
      break;
    case "./imgs/web3.png":
      imageSrc = image8;
      break;
    case "./imgs/web4.png":
      imageSrc = image9;
      break;
    case "./imgs/web5.png":
      imageSrc = image10;
      break;
    case "./imgs/soc1.jpg":
      imageSrc = image11;
      break;
    case "./imgs/soc2.jpg":
      imageSrc = image12;
      break;
    case "./imgs/soc3.jpg":
      imageSrc = image13;
      break;
    case "./imgs/soc4.jpg":
      imageSrc = image14;
      break;
    case "./imgs/soc5.jpg":
      imageSrc = image15;
      break;
    default:
      break;
  }
  return imageSrc;
};

export default Sec5;
