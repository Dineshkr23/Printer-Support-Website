import React, { useState, useEffect } from "react";

const CountdownScroll = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const countDown = () => {
      const futureDate = new Date("10 January 2026"); // Adjust future date
      const currentDate = new Date();
      const diff = futureDate - currentDate;

      const days = Math.floor(diff / 1000 / 60 / 60 / 24);
      const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
      const minutes = Math.floor(diff / 1000 / 60) % 60;
      const seconds = Math.floor(diff / 1000) % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    };

    countDown();
    const interval = setInterval(countDown, 1000);

    return () => clearInterval(interval);
  }, []);

  // Scroll to top logic
  const handleScroll = () => {
    if (window.scrollY >= 250) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="countdown-container">
        <ul className="list-unstyled countdown-counter">
          <li>
            <span className="fs-1 d-block">{timeLeft.days}</span> Days
          </li>
          <li>
            <span className="fs-1 d-block">{timeLeft.hours}</span> Hr
          </li>
          <li>
            <span className="fs-1 d-block">{timeLeft.minutes}</span> Min
          </li>
          <li>
            <span className="fs-1 d-block">{timeLeft.seconds}</span> Sec
          </li>
        </ul>
      </div>

      {showScroll && (
        <div id="scrollUp" onClick={scrollTop} title="Scroll To Top">
          <span className="ti-arrow-up fs-4 text-white"></span>
        </div>
      )}
    </>
  );
};

export default CountdownScroll;
