import email from "../img/email.jpeg";
import ig from "../img/ig.jpg";
import youtube from "../img/Youtube.jpg";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-left">
          <div className="footer-icon">
            <a href="https://www.instagram.com/ponpesma.putra_unsiq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <img src={ig} alt="Instagram" />
            </a>
          </div>
          <div className="footer-icon">
            <a href="https://youtube.com/@ponpesmaunsiqputra?si=mDCdHJt6WfPKV8Vp" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="YouTube" />
            </a>
          </div>
          <div className="footer-icon">
            <a href="mailto:example@example.com">
              <img src={email} alt="Email" />
            </a>
          </div>
        </div>
        <div className="right-section">
          <p>&#169; 2024 Pondok Pesantren UNSIQ II. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
