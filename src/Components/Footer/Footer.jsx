import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <>
      <footer>
        <p>&copy; {new Date().getFullYear()} HRNET Tous droits réservés.</p>
      </footer>
    </>
  );
}

export default Footer;
