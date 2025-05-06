import "../Footer/Footer.css";

function Footer() {
  const footerDate = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer-name">Developed by Costy Foglio</p>
      <p className="footer-date">{footerDate}</p>
    </footer>
  );
}

export default Footer;
