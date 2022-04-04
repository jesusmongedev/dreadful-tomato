import { useContext } from 'react'
import { AppContext } from '../../../customHooks/useContext'
import './styles.scss'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const SearchBar = () => {
  const {
    searchTitleValue,
    setSearchTitleValue,
    startDate,
    setStartDate,
    filter,
  } = useContext(AppContext)

  const handleTitleValue = (e) => {
    setSearchTitleValue(e.target.value)
  }

  return (
    <div className="search-container">
      {!filter && (
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
      )}

      {filter && (
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showYearPicker
          dateFormat="yyyy"
          yearItemNumber={12}
          startDate={new Date()}
          maxDate={new Date()}
          popperPlacement="bottom"
          className="search-container__input"
          placeholderText="Search by year"
        />
      )}
    </div>
  )
}

export default SearchBar
