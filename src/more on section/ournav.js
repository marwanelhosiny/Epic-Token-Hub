import React, { useEffect, useState } from "react";
import content from "../json/En-Ar.json";
import logo from "../imgs/logo.png";
import { Link } from "react-router-dom";

const Ournav = ({ language, onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const { items } =
    selectedLanguage === "arabic"
      ? content.arabicNav
      : selectedLanguage === "english"
      ? content.englishNav
      : content.spanishNav;

  const handleLanguageChange = (selectedLanguage) => {
    setSelectedLanguage(selectedLanguage);
    onLanguageChange(selectedLanguage);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-nav">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} />
        </Link>
        <button
          className="navbar-toggler shadow-none border-0"
          data-bs-toggle="collapse"
          data-bs-target="#navul"
        >
          <label className="hamburger">
            <input type="checkbox" />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              />
              <path className="line" d="M7 16 27 16" />
            </svg>
          </label>
        </button>
        <div className="collapse navbar-collapse" id="navul">
          <ul
            className={`navbar-nav text-center ${
              selectedLanguage === "arabic" ? "me-auto" : "ms-auto"
            }`}
          >
            <li className="nav-item dropdown my-5 my-lg-0">
              <a
                className="nav-link dropdown-toggle fs-5 fw-semibold text-white special-a"
                href="#"
                id="languageDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                dir="ltr"
              >
                {selectedLanguage === "arabic"
                  ? "العربية"
                  : selectedLanguage === "english"
                  ? "English"
                  : selectedLanguage === "italian"
                  ? "italian"
                  : "Español"}
              </a>
              <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                <li>
                  <a
                    className="dropdown-item py-2 fs-5 fw-semibold text-center"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLanguageChange("english");
                    }}
                  >
                    English
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item py-2 fs-5 fw-semibold text-center"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLanguageChange("spanish");
                    }}
                  >
                    Español
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item py-2 fs-5 fw-semibold text-center"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLanguageChange("italian");
                    }}
                  >
                    Italian
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item py-2 fs-5 fw-semibold text-center"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLanguageChange("arabic");
                    }}
                  >
                    العربية
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Ournav;
