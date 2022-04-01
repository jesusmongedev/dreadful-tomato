import { useState } from 'react'
import MovieDescription from './MovieDescription'
import './styles.scss'

const MovieCard = ({ movieImage, movieTitle, movieDescription, movieYear }) => {
  const [showDescription, setShowDescription] = useState(false)

  //   Show description when clicked
  const handleDescription = () => {
    setShowDescription((prevState) => !prevState)
  }

  return (
    <article className="movie-card" onClick={handleDescription}>
      <img className="movie-card__img" src={movieImage} alt={movieTitle} />
      <div className="movie-info">
        <h3 className="movie-info__title">{movieTitle}</h3>
        {showDescription && (
          <MovieDescription
            movieDescription={movieDescription}
            movieYear={movieYear}
          />
        )}
      </div>
    </article>
  )
}

export default MovieCard
