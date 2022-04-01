import useFetchData from '../../customHooks/useFetchData'
import MovieCard from '../MoviesPage/MovieCard'
import SearchBar from '../MoviesPage/SearchBar'

const SeriesPage = () => {
  const { series } = useFetchData()

  return (
    <>
      <SearchBar />
      <main className="main-content">
        <h2 className="h3">Popular Series</h2>
        <section className="movies-grid">
          {series.map(({ images, title, description, releaseYear }, i) => (
            <MovieCard
              key={i}
              movieImage={images['Poster Art'].url}
              movieTitle={title}
              movieDescription={description}
              movieYear={releaseYear}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export default SeriesPage
