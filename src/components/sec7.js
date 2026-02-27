import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import content from "../json/En-Ar.json";

const Sec7 = ({ language }) => {
  const { heading, items } =
    language === "arabic"
      ? content.arabicContentSec7
      : language === "english"
        ? content.englishContentSec7
        : language === "italian"
          ? content.italianContentSec7
          : content.spanishContentSec7;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    subject: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState(""); // "success" or "error"
  const [popupMessage, setPopupMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Close popup after certain duration
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Replace these with your own EmailJS credentials
    const serviceID = "service_m7softl"; // Replace with your service ID
    const templateID = "template_r0gmw8f"; // Replace with your template ID
    const userID = "RxCbgaNYUFKiySfqo"; // Replace with your user/public key

    emailjs
      .send(
        serviceID,
        templateID,
        formData,
        userID
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        setPopupType("success");
        setPopupMessage(language === "arabic" ? "تم إرسال رسالتك بنجاح!" : "Your message has been sent successfully!");
        setShowPopup(true);
        setFormData({
          name: "",
          email: "",
          title: "",
          subject: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send email.", error);
        setPopupType("error");
        setPopupMessage(language === "arabic" ? "فشل في إرسال رسالتك. يرجى المحاولة مرة أخرى لاحقًا." : "Failed to send your message. Please try again later.");
        setShowPopup(true);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // Custom popup component
  const Popup = ({ type, message, onClose }) => {
    return (
      <div className="popup-overlay">
        <div className={`custom-popup ${type}`}>
          <div className="popup-icon">
            {type === "success" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            )}
          </div>
          <div className="popup-content">
            <p>{message}</p>
          </div>
          <button className="popup-close" onClick={onClose}>
            &times;
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-dark w-100 vh-100s pt-5" id="Contact">
      <div className="container">
        <h2 className="pt-5 text-white text-center mb-5">{heading}</h2>
        <div className="lastsection mt-5">
          <form className="form row mx-auto" onSubmit={handleSubmit}>
            <div className="col-12 col-lg-6 row mx-auto px-0">
              <input
                type="text"
                name="name"
                id="name"
                required
                className="input m-form col-12 col-lg-11"
                placeholder={items.name}
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12 col-lg-6 row mx-auto px-0">
              <input
                type="email"
                name="email"
                id="email"
                required
                className="input m-form col-12"
                placeholder={items.email}
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <input
              type="text"
              name="title"
              id="title"
              required
              className="input col-12 m-form"
              placeholder={items.title}
              value={formData.title}
              onChange={handleInputChange}
            />
            <textarea
              name="subject"
              id="subject"
              required
              className="input subject col-12 h-75 m-form"
              placeholder={items.subject}
              value={formData.subject}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="input submit col-12 w-fit px-5 m-auto mt-4 mb-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : items.btn}
            </button>
          </form>
        </div>

        {/* Render popup if showPopup is true */}
        {showPopup && (
          <Popup
            type={popupType}
            message={popupMessage}
            onClose={() => setShowPopup(false)}
          />
        )}
      </div>

      {/* CSS for the popup */}
      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease-out;
        }
        
        .custom-popup {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          padding: 30px;
          width: 100%;
          max-width: 400px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: slideIn 0.4s ease-out;
        }
        
        .popup-icon {
          margin-bottom: 20px;
        }
        
        .popup-content {
          text-align: center;
          margin-bottom: 15px;
        }
        
        .popup-content p {
          margin: 0;
          font-size: 18px;
          color: #333;
        }
        
        .popup-close {
          position: absolute;
          top: 15px;
          right: 15px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #999;
          transition: color 0.2s;
        }
        
        .popup-close:hover {
          color: #333;
        }
        
        .custom-popup.success .popup-icon {
          color: #28a745;
        }
        
        .custom-popup.error .popup-icon {
          color: #dc3545;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        /* RTL Support for Arabic */
        html[dir="rtl"] .popup-close {
          right: auto;
          left: 15px;
        }
      `}</style>
    </section>
  );
};

export default Sec7;