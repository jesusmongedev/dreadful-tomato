const MovieDescription = ({ movieDescription, movieYear }) => {
  return (
    <p className="movie-info__description">
      <span>🗓️ {movieYear}</span> <br />
      {movieDescription}
    </p>
  )
}

export default MovieDescription
