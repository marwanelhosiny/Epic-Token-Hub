import React from 'react';
import content from "../json/En-Ar.json";
import image1 from "../imgs/marwan.jpg"
import image2 from "../imgs/karim.jpg"
import image3 from "../imgs/hosam.jpg"

const Sec6 = ({ language }) => {
  const { heading, items } =
    language === "arabic"
      ? content.arabicContentSec6
      : language === "english"
        ? content.englishContentSec6
        : language === "italian"
          ? content.italianContentSec6
          : content.spanishContentSec6;


  const renderImage = (imagePath) => {
    let imageSrc = '';
    switch (imagePath) {
      case './imgs/marwan.jpg':
        imageSrc = image1;
        break;
      case './imgs/karim.jpg':
        imageSrc = image2;
        break;
      case './imgs/hosam.jpg':
        imageSrc = image3;
        break;
      default:
        break;
    }
    return <img src={imageSrc} className="persons-image" />;
  };


  return (
    <section className="bg-dark bg-gradient w-100 vh-100s" id="Team">
      <div className="container">
        <h2 className="pt-5 text-white text-center mb-5">{heading}</h2>
        <div className="row">
          {items.map((item, index) => (
            <div className="col-lg-4 col-12 m-auto mb-5 text-center" key={index}>
              <div className="persons">
                <div className="row position-absolute">
                </div>
                <div>
                  {renderImage(item.image)}
                </div>
                <div className="persons-info">
                  <span className="fs-3 fw-semibold">{item.name}</span>
                  <p className="fs-5">{item.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sec6;