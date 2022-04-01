import { useContext } from 'react'
import { AppContext } from '../../customHooks/useContext'
// import useFetchData from '../../customHooks/useFetchData'
import MovieCard from './MovieCard'
import SearchBar from './SearchBar'
import './styles.scss'

const MoviesPage = () => {
  const { searchedByTitle } = useContext(AppContext)

  return (
    <>
      <SearchBar />

      <main className="main-content">
        <h2 className="h3">Popular Movies</h2>
        <section className="movies-grid">
          {searchedByTitle.map(
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

export default MoviesPage
