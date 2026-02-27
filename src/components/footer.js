import React from "react";
import content from "../json/En-Ar.json";

const Footer = ({ language }) => {
  const { heading1, heading2, items } =
    language === "arabic"
      ? content.arabicFooter
      : language === "english"
        ? content.englishFooter
        : language === "italian"
          ? content.italianFooter
          : content.spanishFooter;

  return (
    <footer className="bg-dark bg-gradient text-white pt-sp">
      <div className="container">
        <div className="row">
          <div className="ms-auto col-12 col-md-4">
            <h2>{heading2}</h2>
            <h4>{items.headaddress}</h4>
            <p>{items.address}</p>
            <h4>{items.headphone}</h4>

            {/* عرض الأرقام واحد تحت التاني */}
            <div className="d-flex flex-column mb-4">
              {items.phone.split("/").map((phone, index) => (
                <p key={index} className="mb-1">
                  {phone.trim()}
                </p>
              ))}
            </div>

            <p className="mb-5">epictravelhub.mi@gmail.com</p>

            {/* السوشيال ميديا حاليا متعلقة */}
            {/*
            <div className="row px-0 me-5 my-4">
              ... (كل الكود بتاع السوشيال ميديا هنا)
            </div>
            */}
          </div>

          <div className="col-12 col-md-8">
<iframe
  className="mx-auto rounded-4 mb-5"
  src="https://www.google.com/maps?q=Via%20Popoli%20Uniti%2020%2C%20Milan%2C%20Italy&output=embed"
  width="600"
  height="450"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
