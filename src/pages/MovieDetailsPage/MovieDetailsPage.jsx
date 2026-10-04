import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import MovieDetails from '../../components/MovieDetails/MovieDetails'
import Loader from '../../components/Loader/Loader'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import './MovieDetailsPage.css'

const MovieDetailsPage = () => {
  const { imdbID } = useParams()

  const [Film, SmenitFilm] =useState(null)
  const [Zagruzka, SmenitZagruzka] =useState(false)
  const [Oshibka, SmenitOshibka] =useState(null)

  useEffect(() => {
    const zagruzitFilm = async () => {
    SmenitOshibka(null)
    SmenitZagruzka(true)

      try {
        const otvet = await fetch(
          `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&i=${imdbID}&plot=full`
        )
        const data = await otvet.json()

        if (data.Response === 'False') {
          SmenitOshibka(data.Error)
        } else {
          SmenitFilm(data)
        }
      } catch (error) {
        SmenitOshibka('Не удалось связаться с сервером')
      } finally {
        SmenitZagruzka(false)
      }
    }

    zagruzitFilm()
  }, [imdbID])

  return (
    <main className="movie-details-page">
      <div className="container">
        {Zagruzka && <Loader />}
        {!Zagruzka && Oshibka && <ErrorMessage message={Oshibka} />}
        {!Zagruzka && !Oshibka && Film && <MovieDetails movie={Film} />}
      </div>
    </main>
)
}

export default MovieDetailsPage