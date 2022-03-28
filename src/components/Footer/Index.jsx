import './styles.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <img
        src="https://i.postimg.cc/KjyNvQCM/logo.png"
        alt="Dreadful Tomato"
        className="footer__logo"
      />
      <ul>
        <li>Home</li>
        <li>Terms of Use</li>
        <li>Legal Notices</li>
        <li>Help</li>
        <li>Mange Account</li>
        <div className="app-container">
          <img
            src="https://i.postimg.cc/wMhdk4t5/app-store.png"
            alt="app store"
          />
          <img
            src="https://i.postimg.cc/SQ8qqRZX/google-play.png"
            alt="google-play store"
          />
        </div>
        <p>Copyright 2022 Tomato Streaming All Rights Reserved</p>
      </ul>
    </footer>
  )
}

export default Footer
