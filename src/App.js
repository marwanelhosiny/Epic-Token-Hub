import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Main from "./components/main";
import Sec1 from "./components/sec1";
import Sec2 from "./components/sec2";
import Sec3 from "./components/sec3";
import Sec4 from "./components/sec4";
import Sec5 from "./components/sec5";
import Sec6 from "./components/sec6";
import Sec7 from "./components/sec7";
import Footer from "./components/footer";
import Section from "./json/En-Ar.json";
import "./all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "bootstrap/dist/js/bootstrap.bundle";

const App = () => {
  const [language, setLanguage] = useState("english");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  if (loading) {
    return (
      <>
        <div className="bg-dark vh-100 w-100 position-relative">
          <div className="position-absolute top-50 start-50 translate-middle">
            <div class="loader m-auto"></div>
            <h1 className="text-white mt-4 fs-3 text-center">...Loading</h1>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div dir={language === "arabic" ? "rtl" : "ltr"}>
        <Navbar language={language} onLanguageChange={handleLanguageChange} />
        <Main language={language} />
        <Sec1 language={language} />
        <Sec2 language={language} />
        <Sec3 language={language} />
        <Sec4 language={language} />
        <Sec5 language={language} />
        <Sec6 language={language} />
        <Sec7 language={language} />
        <Footer language={language} />
      </div>
    </>
  );
};

export default App;
