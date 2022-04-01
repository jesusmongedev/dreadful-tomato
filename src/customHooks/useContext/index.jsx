import React, { useState } from 'react'
import useFetchData from '../useFetchData'

// React Hook useContext es un objeto con dos propiedades {Provider, Consumer}
const AppContext = React.createContext('null')

function AppProvider(props) {
  // Llamamos a nuestro Custom Hook con sus dos valores: El estado inicial y la funcion setState que permite actualizar el valor y re-renderizarlo
  const { movies } = useFetchData()
  const [searchTitleValue, setSearchTitleValue] = useState('')

  let searchedByTitle = []

  if (searchTitleValue === '') {
    searchedByTitle = movies
  } else {
    searchedByTitle = movies.filter((movie) => {
      const movieTitle = movie.title.toLowerCase()
      const searchValue = searchTitleValue.toLowerCase()
      return movieTitle.includes(searchValue)
    })
    console.log(searchedByTitle)
  }

  return (
    <AppContext.Provider
      value={{
        searchedByTitle,
        searchTitleValue,
        setSearchTitleValue,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
