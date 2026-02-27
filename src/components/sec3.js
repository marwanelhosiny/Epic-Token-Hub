import React, { useEffect, useRef } from "react";
import content from "../json/En-Ar.json";
import ScrollOut from "scroll-out";

const Sec3 = ({ language }) => {
  const { heading, items } =
  language === "arabic"
  ? content.arabicContentSec3
  : language === "english"
  ? content.englishContentSec3
  : language === "italian"
  ? content.italianContentSec3
  : content.spanishContentSec3;

  const numRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const bghere = document.querySelector(".bg-here");
      const nums = numRefs.current;

      if (!isElementInViewport(bghere)) {
        return;
      }

      if (bghere.dataset.scroll === "in") {
        let targetValues = [150, 220, 130];

        nums.forEach((ele, index) => {
          let targetValue = targetValues[index];
          let currentValue = Number(ele.textContent);

          if (currentValue < targetValue) {
            let timer = setInterval(() => {
              if (currentValue < targetValue) {
                currentValue++;
                ele.textContent = currentValue;
              } else {
                clearInterval(timer);
              }
            }, 5);
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    ScrollOut({
      onShown: handleScroll,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const renderItems = (items) => {
    return items.map((item, index) => (
      <div key={index} className="col-12 col-lg-4 mt-5">
        <span ref={(ref) => (numRefs.current[index] = ref)}>{item.count}</span>
        <p>{item.title}</p>
      </div>
    ));
  };

  return (
    <section className="bg-here vh-50s" data-scroll="in">
      <div className="container">
        <h2 className="text-white pt-5 w-50 m-auto text-center mb-5">
          {heading}
        </h2>
        <div className="row text-white text-center mt-5 fs-3 pb-5">
          {renderItems(items)}
        </div>
      </div>
    </section>
  );
};

export default Sec3;
