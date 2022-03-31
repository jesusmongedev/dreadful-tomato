import { Link } from 'react-router-dom'
import useFetchData from '../../customHooks/useFetchData'
import './styles.scss'

const MoviesPage = () => {
  const { movies } = useFetchData()

  return (
    <div>
      MoviesPage
      <Link to="/">Back to Home page</Link>
      {movies.map((movie, i) => (
        <ul className="test-data" key={i}>
          <li>{movie.title}</li>
        </ul>
      ))}
    </div>
  )
}

export default MoviesPage
