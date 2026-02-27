import React from 'react';
import content from "../json/En-Ar.json";

const Sec2 = ({ language }) => {
  const { heading, items } = 
  language === "arabic"
  ? content.arabicContentSec2
  : language === "english"
  ? content.englishContentSec2
  : language === "italian"
  ? content.italianContentSec2
  : content.spanishContentSec2;

  return (
    <section className="bg-dark w-100 pt-5 position-relative vh-100s overflow-hidden"  id="Services">
      <div className="container">
        <h2 className="text-white text-center mt-5 mb-5 m-auto w-50">{heading}</h2>

        <div className="sec-container row m-auto .mt-sp">
          {items.map((item, index) => (
            <div key={index} data-text={item.text} style={{ '--r': item.rValue }} className="col-xl-4 col-12 glass fs-4 my-4 mb-5">
              <p className="text-white px-3 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sec2;