import { useContext } from 'react'
import { AppContext } from '../../customHooks/useContext'
import MovieCard from '../MoviesPage/MovieCard'
import SearchBar from '../MoviesPage/SearchBar'

const SeriesPage = () => {
  const { searchedSeriesByTitle } = useContext(AppContext)

  return (
    <>
      <SearchBar />
      <main className="main-content">
        <h2 className="h3">Popular Series</h2>
        <section className="movies-grid">
          {searchedSeriesByTitle.map(
            ({ images, title, description, releaseYear }, i) => (
              <MovieCard
                key={i}
                movieImage={images['Poster Art'].url}
                movieTitle={title}
                movieDescription={description}
                movieYear={releaseYear}
              />
            )
          )}
        </section>
      </main>
    </>
  )
}

export default SeriesPage
