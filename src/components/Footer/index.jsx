import './styles.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img
          src="https://i.postimg.cc/KjyNvQCM/logo.png"
          alt="Dreadful Tomato"
          className="footer__logo"
        />
        <ul className="footer-links">
          <li className="footer-links__item">Home</li>
          <li className="footer-links__item">Terms of Use</li>
          <li className="footer-links__item">Legal Notices</li>
          <li className="footer-links__item">Help</li>
          <li className="footer-links__item">Mange Account</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <div className="footer-app">
          <img
            src="https://i.postimg.cc/wMhdk4t5/app-store.png"
            alt="app store"
            className="footer-app__img"
          />
          <img
            src="https://i.postimg.cc/SQ8qqRZX/google-play.png"
            alt="google-play store"
            className="footer-app__img"
          />
        </div>
        <p className="footer__copyright">
          Copyright 2022 Tomato Streaming All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
