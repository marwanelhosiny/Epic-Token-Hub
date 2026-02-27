import React, { useEffect, useState } from "react";
import content from "../json/En-Ar.json";
import logo from "../imgs/logo.png";
// Make sure this path is correct - if this doesn't work, we'll use inline SVGs instead
import 'flag-icons/css/flag-icons.min.css';

// Add this CSS directly inside your component - this ensures the styles are applied
const flagStyles = `
  .custom-flag {
    width: 24px;
    height: 24px;
    display: inline-block;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin-right: 8px;
  }
  
  .flag-us {
    background-image: url("https://cdn.jsdelivr.net/npm/flag-icons@6.6.6/flags/4x3/us.svg");
  }
  
  .flag-es {
    background-image: url("https://cdn.jsdelivr.net/npm/flag-icons@6.6.6/flags/4x3/es.svg");
  }
  
  .flag-it {
    background-image: url("https://cdn.jsdelivr.net/npm/flag-icons@6.6.6/flags/4x3/it.svg");
  }
  
  .flag-sa {
    background-image: url("https://cdn.jsdelivr.net/npm/flag-icons@6.6.6/flags/4x3/sa.svg");
  }
  
  .navbar-brand img {
    height: 90px; /* Increase logo size */
    width: auto;
  }
`;

const scrollToSection = (event) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    if (targetId === "#" || targetId === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
};

const Navbar = ({ language, onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const { items } =
    selectedLanguage === "arabic"
      ? content.arabicNav
      : selectedLanguage === "english"
        ? content.englishNav
        : selectedLanguage === "italian"
          ? content.italianNav
          : content.spanishNav;

  const handleLanguageChange = (selectedLanguage) => {
    setSelectedLanguage(selectedLanguage);
    onLanguageChange(selectedLanguage);
  };

  useEffect(() => {
    // Add the styles to the document
    const styleElement = document.createElement('style');
    styleElement.innerHTML = flagStyles;
    document.head.appendChild(styleElement);

    return () => {
      // Clean up when component unmounts
      document.head.removeChild(styleElement);
    };
  }, []);

  useEffect(() => {
    const li = document.querySelectorAll("nav ul li");
    const notthis = document.querySelectorAll("nav ul li:not(:last-child)");
    const navul = document.getElementById("navul");
    const checkhambu = document.querySelector(".hamburger input");

    notthis.forEach((element) => {
      element.addEventListener("click", () => {
        navul.classList.remove("show");
        checkhambu.checked = false;
      });
    });

    li.forEach((ele) => {
      ele.addEventListener("click", () => {
        if (!ele.classList.contains("active")) {
          li.forEach((delele) => {
            delele.classList.remove("active");
          });
          ele.classList.add("active");
        }
      });
    });

    const navbarr = document.getElementById("navbarr");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        navbarr.classList.add("bg-nav");
      } else {
        navbarr.classList.remove("bg-nav");
      }
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top" id="navbarr">
      <div className="container">
        <a
          href="#"
          className="navbar-brand"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} alt="Logo" />
        </a>
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
            className={`navbar-nav text-center ${selectedLanguage === "arabic" ? "me-auto" : "ms-auto"
              }`}
          >
            <li className="nav-item my-5 my-lg-0 mx-4">
              <a
                href="#"
                className="nav-link fs-5 fw-semibold text-white special-a active"
                onClick={(event) => {
                  event.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {items.home}
              </a>
            </li>
            <li className="nav-item my-5 my-lg-0 mx-4">
              <a
                href="#Services"
                className="nav-link fs-5 fw-semibold text-white special-a"
                onClick={scrollToSection}
              >
                {items.services}
              </a>
            </li>
            <li className="nav-item my-5 my-lg-0 mx-4">
              <a
                href="#Works"
                className="nav-link fs-5 fw-semibold text-white special-a"
                onClick={scrollToSection}
              >
                {items.works}
              </a>
            </li>
            <li className="nav-item my-5 my-lg-0 mx-4">
              <a
                href="#Team"
                className="nav-link fs-5 fw-semibold text-white special-a"
                onClick={scrollToSection}
              >
                {items.team}
              </a>
            </li>
            <li className="nav-item my-5 my-lg-0 mx-4">
              <a
                href="#Contact"
                className="nav-link fs-5 fw-semibold text-white special-a"
                onClick={scrollToSection}
              >
                {items.contact}
              </a>
            </li>
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
                      ? "Italian"
                      : "Español"}
              </a>
              <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                <li>
                  <a
                    className="dropdown-item py-2 fs-5 fw-semibold text-center d-flex align-items-center justify-content-center gap-2"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLanguageChange("english");
                    }}
                  >
                    {/* Using our custom flag class as fallback */}
                    <span className="flag-icon flag-icon-us custom-flag flag-us"></span>
                    English
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item py-2 fs-5 fw-semibold text-center d-flex align-items-center justify-content-center gap-2"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLanguageChange("spanish");
                    }}
                  >
                    <span className="flag-icon flag-icon-es custom-flag flag-es"></span>
                    Español
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item py-2 fs-5 fw-semibold text-center d-flex align-items-center justify-content-center gap-2"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLanguageChange("italian");
                    }}
                  >
                    <span className="flag-icon flag-icon-it custom-flag flag-it"></span>
                    Italian
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item py-2 fs-5 fw-semibold text-center d-flex align-items-center justify-content-center gap-2"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLanguageChange("arabic");
                    }}
                  >
                    <span className="flag-icon flag-icon-sa custom-flag flag-sa"></span>
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

export default Navbar;