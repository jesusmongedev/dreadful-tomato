import './styles.scss'

const Header = () => {
  return (
    <header className="header">
      <img
        src="https://i.postimg.cc/KjyNvQCM/logo.png"
        alt="Dreadful Tomato"
        className="header__logo"
      />
      <div className="header-actions">
        <a href="https://rviewer.io/" className="header-actions__user-login">
          Login{' '}
          <img
            src="https://i.postimg.cc/yNf0pb2V/icon-login.png"
            alt="Login icon"
          />
        </a>
        <button className="primary-button">Start your free trial</button>
      </div>
    </header>
  )
}

export default Header
