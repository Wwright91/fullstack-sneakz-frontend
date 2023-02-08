import React from 'react'
import hero from "../assets/sneakz-logo.jpeg";

export const Footer = () => {
  return (
      <footer id='footer'>
          <ul>
          <img src={hero} alt="hero" width="100px" height="50px"/>
              <h5>
                  SNEAKZ EST 2023
              </h5>
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
  )
}
