import React from "react";
import content from "../json/En-Ar.json";
import image1 from "../imgs/01.jpg";
import image2 from "../imgs/02.jpg";
import image3 from "../imgs/03.jpg";
import { Link } from "react-router-dom";

const Sec4 = ({ language }) => {
  const { heading, items, linkheading } =
    language === "arabic"
      ? content.arabicContentSec4
      : language === "english"
      ? content.englishContentSec4
      : language === "italian"
      ? content.italianContentSec4
      : content.spanishContentSec4;

  const renderItems = (items) => {
    return items.map((item, index) => (
      <div key={index} className="childblurcard col-12 col-lg-4 mb-lg-0 mb-5">
        <div className="bg-whitegray py-2 rounded-3 fs-2">
          <p className="tip my-3">{item.tip}</p>
          {renderImage(item.image)}
          <p className="second-text my-3 px-2">{item.text}</p>
          <div className="w-fit m-auto">
            <Link
              to={item.link}
              className="gold-sp nav-link my-4 cursor-pointer "
            >
              <span className="">{linkheading}</span>
            </Link>
          </div>
        </div>
      </div>
    ));
  };

  const renderImage = (imagePath) => {
    let imageSrc = "";
    switch (imagePath) {
      case "./imgs/01.jpg":
        imageSrc = image1;
        break;
      case "./imgs/02.jpg":
        imageSrc = image2;
        break;
      case "./imgs/03.jpg":
        imageSrc = image3;
        break;
      default:
        break;
    }
    return <img src={imageSrc} alt="Item Image" />;
  };

  return (
    <section className="bg-dark bg-gradient w-100 vh-100s">
      <div className="container">
        <h2 className="pt-5 text-white text-center mb-5">{heading}</h2>
        <div className="blurcard row mx-auto text-center text-white">
          {renderItems(items)}
        </div>
      </div>
    </section>
  );
};

export default Sec4;
