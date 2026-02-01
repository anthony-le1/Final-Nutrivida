function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-4">
            <h4>Contactos</h4>
            <p>info@nutrivida.com</p>
            <p>+593 987 654 321</p>
          </div>

          <div className="col-md-4">
            <h4>Horarios</h4>
            <p>Lun - Vie: 08:00 - 18:00</p>
            <p>Sáb: 09:00 - 13:00</p>
          </div>

          <div className="col-md-4">
            <h4>Redes</h4>
            <div className="social-row">
              <img src="/images/instagram.png" />
              <img src="/images/facebook.png" />
              <img src="/images/twitter.png" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
