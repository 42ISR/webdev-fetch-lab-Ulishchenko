import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'

const MovieList = ({ filmy }) => {
  return (
    <ul className="movie-list">
      {filmy.map((film) => (
        <li key={film.imdbID}>
          <MovieCard movie={film} />
        </li>
      ))}
    </ul>
  )
}

export default MovieList
