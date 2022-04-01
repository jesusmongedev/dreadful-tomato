import './styles.scss'
const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="input-container search-container__input">
        🔍
        <input
          className="search-container__input search-container__input--no-styles"
          type="search"
          placeholder="Name"
        />
      </div>
      <input className="search-container__input" type="month" name="" id="" />
    </div>
  )
}

export default SearchBar
