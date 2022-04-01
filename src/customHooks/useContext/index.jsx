import React, { useState } from 'react'
import useFetchData from '../useFetchData'

// React Hook useContext es un objeto con dos propiedades {Provider, Consumer}
const AppContext = React.createContext('null')

function AppProvider(props) {
  // Llamamos a nuestro Custom Hook con sus dos valores: El estado inicial y la funcion setState que permite actualizar el valor y re-renderizarlo
  const { movies, series } = useFetchData()
  const [searchTitleValue, setSearchTitleValue] = useState('')
  const [searchYearValue, setSearchYearValue] = useState('')

  // Filter Movies by Title
  let searchedMovieByTitle = []

  if (searchTitleValue === '') {
    searchedMovieByTitle = movies
  } else {
    searchedMovieByTitle = movies.filter((movie) => {
      const movieTitle = movie.title.toLowerCase()
      const searchValue = searchTitleValue.toLowerCase()
      return movieTitle.includes(searchValue)
    })
  }

  // Filter Series by Title
  let searchedSeriesByTitle = []

  if (searchTitleValue === '') {
    searchedSeriesByTitle = series
  } else {
    searchedSeriesByTitle = series.filter((serie) => {
      const serieTitle = serie.title.toLowerCase()
      const searchValue = searchTitleValue.toLowerCase()
      return serieTitle.includes(searchValue)
    })
  }

  return (
    <AppContext.Provider
      value={{
        searchedMovieByTitle,
        searchedSeriesByTitle,
        searchTitleValue,
        setSearchTitleValue,
        searchYearValue,
        setSearchYearValue,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
