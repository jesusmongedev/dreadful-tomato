import { Route, Routes } from 'react-router-dom'
import HomeMainContent from '../HomeMainContent'
import Header from '../Header'
import Footer from '../Footer/Index'
import MoviesPage from '../MoviesPage'
import SeriesPage from '../SeriesPage'

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomeMainContent />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/series" element={<SeriesPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
