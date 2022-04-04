import React, { useState } from 'react'
import useFetchData from '../useFetchData'

// React Hook useContext object with 2 properties {Provider, Consumer}
const AppContext = React.createContext('null')

function AppProvider(props) {
  // customHook with the data grouped
  const { movies, series } = useFetchData()
  const [searchTitleValue, setSearchTitleValue] = useState('')
  const [startDate, setStartDate] = useState(null)
  const [filter, setFilter] = useState('')
  let searchYearValue = startDate?.getFullYear()
  console.log(searchYearValue)

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

  //*TODO Filter Movies by Year

  if (searchYearValue !== undefined) {
    searchedMovieByTitle = movies.filter((movie) => {
      const movieYear = movie.releaseYear?.toString()
      // console.log(movieYear)
      // console.log(searchValue)
      return movieYear.includes(searchYearValue)
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

  //*TODO Filter Movies by Year

  if (searchYearValue !== undefined) {
    searchedSeriesByTitle = series.filter((serie) => {
      const serieYear = serie.releaseYear.toString()
      return serieYear.includes(searchYearValue)
    })
  }

  // Handle Filter selection
  const handleFilter = () => {
    setFilter(!filter)
  }

  return (
    <AppContext.Provider
      value={{
        searchedMovieByTitle,
        searchedSeriesByTitle,
        searchTitleValue,
        setSearchTitleValue,
        searchYearValue,
        startDate,
        setStartDate,
        filter,
        setFilter,
        handleFilter,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
