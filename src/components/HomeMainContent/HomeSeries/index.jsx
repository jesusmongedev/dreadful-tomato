import { Link } from 'react-router-dom'

const HomeSeries = () => {
  return (
    <Link to="/series">
      <section className="section">
        <img
          src="https://i.postimg.cc/hPf2f3kY/series.png"
          alt="series"
          className="section__img"
        />
        <h2 className="section__tittle">Series</h2>
      </section>
    </Link>
  )
}

export default HomeSeries
