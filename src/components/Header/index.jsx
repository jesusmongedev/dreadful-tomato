import { Link, useLocation } from 'react-router-dom'
import './styles.scss'

const Header = () => {
  const { pathname } = useLocation()

  return (
    <header className="header" id="top">
      <Link to="/">
        <img
          src="https://i.postimg.cc/KjyNvQCM/logo.png"
          alt="Dreadful Tomato"
          className="header__logo"
        />
      </Link>

      {pathname === '/movies' || pathname === '/series' ? (
        <nav className="header-nav">
          <Link to="/movies">
            <div className="nav-container">
              <img
                src="https://i.postimg.cc/sMZkjywp/icon-movies.png"
                alt="icon movies"
                className="nav-container__icon"
              />
              <span>Movies</span>
            </div>
          </Link>
          <Link to="/series">
            <div className="nav-container">
              <img
                src="https://i.postimg.cc/6yTsPCZb/icon-series.png"
                alt="icon movies"
                className="nav-container__icon"
              />
              <span>Series</span>
            </div>
          </Link>
          <div className="nav-container nav-container--end">
            <img
              src="https://i.postimg.cc/VdTyP5Bf/icon-filter.png"
              alt="icon movies"
              className="nav-container__icon"
            />
            <span>Filters</span>
          </div>
        </nav>
      ) : (
        ''
      )}

      <div className="header-actions">
        <Link to="/" className="header-actions__user-login">
          Login{' '}
          <img
            src="https://i.postimg.cc/yNf0pb2V/icon-login.png"
            alt="Login icon"
          />
        </Link>
        <button className="primary-button">Start your free trial</button>
      </div>
    </header>
  )
}

export default Header
