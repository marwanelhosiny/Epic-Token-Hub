import React, { useState } from "react";
import Ournav from "./ournav";
import Section from "../json/En-Ar.json";
import image1 from "../imgs/01.jpg";

const Projectstudy = () => {
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
            <h2>{items[0].text} :</h2>
            <div className="row">
              <img
                src={image1}
                className="col-12 mmor-auto my-2 col-lg-6 my-5"
                alt="image"
              />
            </div>
            <p className="fs-5 fw-light">{items[0].desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectstudy;
