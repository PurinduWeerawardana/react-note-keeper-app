import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyrights ⓒ <a style={{textDecoration:"none", color:"white"}} href="https://github.com/PurinduWeerawardana">Thamash</a> {year}</p>
    </footer>
  );
}

export default Footer;
