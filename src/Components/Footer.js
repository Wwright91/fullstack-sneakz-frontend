import React from "react";
import hero from "../assets/sneakz-logo.jpeg";

export const Footer = () => {
  const scrollContainer = () => {
    return document.documentElement || document.body;
  };

  document.addEventListener("scroll", () => {
    const showOnPx = 100;
    const backToTopButton = document.querySelector(".back-to-top");
    if (scrollContainer().scrollTop > showOnPx) {
      backToTopButton.classList.remove("hidden");
    } else {
      backToTopButton.classList.add("hidden");
    }
  });

  const goToTop = () => {
    document.body.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer id="footer">
      <button className="back-to-top hidden" onClick={goToTop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="back-to-top-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 11l5-5m0 0l5 5m-5-5v12"
          />
        </svg>
      </button>
      <ul>
        <img src={hero} alt="hero" width="100px" height="50px" />
        <h5>SNEAKZ EST 2023</h5>
        <li>
          <a
            href="https://github.com/Wwright91"
            target="_blank"
            rel="noreferrer"
          >
            Wisdom Wright
          </a>
        </li>
      </ul>
    </footer>
  );
};
