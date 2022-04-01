import { Route, Routes } from 'react-router-dom'
import Header from '../../Header'
import HomeMainContent from '../../HomeMainContent'
import MoviesPage from '../../MoviesPage'
import SeriesPage from '../../SeriesPage'
import Footer from '../../Footer'

const AppUi = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomeMainContent />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/series" element={<SeriesPage />} />
      </Routes>
      <Footer />
      <a className="back-top" href="#top">
        ⬆️
      </a>
    </div>
  )
}

export default AppUi
