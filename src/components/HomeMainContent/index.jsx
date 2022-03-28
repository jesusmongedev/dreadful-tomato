import './styles.scss'
import HomeMovies from './HomeMovies'
import HomeSeries from './HomeSeries'

const HomeMainContent = () => {
  return (
    <main className="main">
      <HomeMovies />
      <HomeSeries />
    </main>
  )
}

export default HomeMainContent
