const MovieDescription = ({ showDescription, movieDescription, movieYear }) => {
  return (
    <p
      className={`movie-info__description ${
        showDescription ? 'movie-info__description--show' : ''
      }`}
    >
      <span>🗓️ {movieYear}</span> <br />
      {movieDescription}
    </p>
  )
}

export default MovieDescription
