import React, { useState } from 'react'
import useFetchData from '../useFetchData'

// React Hook useContext object with 2 properties {Provider, Consumer}
const AppContext = React.createContext('null')

function AppProvider(props) {
  // customHook with the data grouped
  const { movies, series } = useFetchData()
  const [searchTitleValue, setSearchTitleValue] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  let searchYearValue = startDate?.getFullYear()
  console.log(startDate?.getFullYear())

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
  // let searchedMovieByYear = []

  // if (searchYearValue === '') {
  //   searchedMovieByYear = movies
  // } else {
  //   searchedMovieByYear = movies.filter((movie) => {
  //     const movieYear = movie.releaseYear?.toString()
  //     console.log(movieYear)
  //     const searchValue = searchYearValue
  //     console.log(searchValue)
  //     return movieYear.includes(searchValue)
  //   })
  // }

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
        startDate,
        setStartDate,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
