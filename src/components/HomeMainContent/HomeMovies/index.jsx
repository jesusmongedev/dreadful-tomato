import { Link } from 'react-router-dom'

const HomeMovies = () => {
  return (
    <Link to="/movies">
      <section className="section">
        <img
          src="https://i.postimg.cc/vBFJzdsD/movies.png"
          alt="movies"
          className="section__img section__img--filter"
        />
        <h2 className="section__tittle section__tittle--opacity">Movies</h2>
      </section>
    </Link>
  )
}

export default HomeMovies
