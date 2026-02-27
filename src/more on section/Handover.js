import React, { useState } from "react";
import Ournav from "./ournav";
import Section from "../json/En-Ar.json";
import image3 from "../imgs/03.jpg";

const Handover = () => {
  const [language, setLanguage] = useState("english");

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const { items } =
    language === "arabic"
      ? Section.arabicContentSec4
      : language === "english"
      ? Section.englishContentSec4
      : Section.spanishContentSec4;

  return (
    <div dir={language === "arabic" ? "rtl" : "ltr"}>
      <Ournav language={language} onLanguageChange={handleLanguageChange} />

      <div className="bg-dark bg-gradient py-5">
        <div className="container">
          <div className="mt-5 text-white">
            <h2>{items[2].text} :</h2>
            <div className="row">
              <img
                src={image3}
                className="col-12 mmor-auto col-lg-6 my-5"
                alt="image"
              />
            </div>
            <p className="fs-5 fw-light">{items[2].desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handover;
