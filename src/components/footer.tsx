const Footer = () => {
  return (
    <footer>
      <div className="footerChild">
        <a
          href="https://www.facebook.com/p/Boucherie-Garnier-100064954716280/"
          target="_blank"
          rel="noreferrer"
        >
          FACEBOOK
        </a>
        <a href="mailto:boucheriethierry@orange.fr">ADRESSE E-MAIL</a>
        <a href="tel:0475015321">TELEPHONE</a>
      </div>
      <div className="footerChild2">
        <p>
          Réalisé par{" "}
          <a href="https://skymdev.fr" target="_blank" rel="noreferrer">
            SkymDev
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
