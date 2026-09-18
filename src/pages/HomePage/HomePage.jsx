import { useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import MovieList from '../../components/MovieList/MovieList'
import './HomePage.css'

const HomePage = () => {
  const [Zapros, SmenitZapros] = useState('')

  const [Filmy, SmenitFilmy] = useState([])
  const [IdetZagruzka, SmenitIdetZagruzka] = useState(false)
  const [Oshibka, SmenitOshibka] = useState(null)








  
  return (
    <main className="home-page">
      <div className="container home-page__inner">
        <SearchBar
          ZaprosZnachenie={Zapros}
          SmenitZapros={SmenitZapros}
        />

        <section className="home-page__section">
          <h2 className="home-page__section-title">Результат поиска</h2>
          <MovieList />
        </section>
      </div>
    </main>
  )
}

export default HomePage