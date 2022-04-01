import { useContext } from 'react'
import { AppContext } from '../../../customHooks/useContext'
import './styles.scss'

const SearchBar = () => {
  const { searchTitleValue, setSearchTitleValue } = useContext(AppContext)

  const handleTitleValue = (e) => {
    setSearchTitleValue(e.target.value)
    console.log(searchTitleValue)
  }

  return (
    <div className="search-container">
      <div className="input-container search-container__input">
        🔍
        <input
          className="search-container__input search-container__input--no-styles"
          type="search"
          placeholder="Name"
          value={searchTitleValue}
          onChange={handleTitleValue}
        />
      </div>
      <input className="search-container__input" type="month" name="" id="" />
    </div>
  )
}

export default SearchBar
