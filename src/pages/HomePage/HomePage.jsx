import { useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import MovieList from '../../components/MovieList/MovieList'
import Loader from '../../components/Loader/Loader'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import './HomePage.css'

const HomePage = () => {
  const [Zapros, SmenitZapros] = useState('')

  const [Filmy, SmenitFilmy] = useState([])
  const [Zagruzka, SmenitZagruzka] = useState(false)
  const [Oshibka, SmenitOshibka] = useState(null)

const poiskFilmov = async (event) => {
    event.preventDefault()
    SmenitOshibka(null)
    SmenitZagruzka(true)


    try {
      const otvet = await fetch(
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${encodeURIComponent(Zapros)}`
      );
      const data = await otvet.json()

      if (data.Response === 'False') {
        SmenitOshibka(data.Error)
        SmenitFilmy([])
      } else {
      SmenitFilmy(data.Search)
      }

    } catch (error) {
      SmenitOshibka('Не удалось с сервером')
      SmenitFilmy([])
    } finally {
      SmenitZagruzka(false)
    }
  }



  return (
    <main className="home-page">
      <div className="container home-page__inner">
        <SearchBar
        znachenie={Zapros}
        izmenenie={SmenitZapros}
        otpravka={poiskFilmov}
        />

        <section className="home-page__section">
          <h2 className="home-page__section-title">Результат поиска</h2>
          {Zagruzka ? (
          <Loader />
          ) : Oshibka ? (
          <ErrorMessage message={Oshibka} />
          ) :  (
          <MovieList filmy={Filmy} />
          )}
        </section>
      </div>
    </main>
)
}

export default HomePage