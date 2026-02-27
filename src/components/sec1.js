import React from "react";
import content from "../json/En-Ar.json";


const Sec1 = ({ language }) => {
  const { heading, items } = 
  language === "arabic"
  ? content.arabicContentSec1
  : language === "english"
  ? content.englishContentSec1
  :language === "italian"
  ?content.italianContentSec1
  : content.spanishContentSec1;

  return (
    <section className="bg-dark bg-gradient w-100 pt-2 pb-5">
      <div className="container">
        <div className="pt-5">
          <h2 className="text-white mt-5 fs-1 mb-5">{heading}</h2>
          <div className="flex-container row mt-5" id="abouthere">
            {items.map((ele, index) => (
              <div className="col-12 col-xl-6 m-auto" key={index}>
                <div className="bg-white rounded-5 w-100 my-3 row shadow movehover m-auto h-200">
                  <div className="col-4 iconfather">
                    <div className="fs-1 text-white iconshape"><i className={ele.icon}></i></div>
                  </div>
                  <div className="col-8 py-4">
                    <h2 className="mb-3 fs-3">{ele.h2}</h2>
                    <p className="fs-5">{ele.p}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec1;