import './SearchBar.css'

const SearchBar = ({ ZaprosZnachenie, SmenitZapros }) => {
  const Otpravka = (e) => {
    e.preventDefault()
  }

  return (
    <form className="search-bar" onSubmit={Otpravka}>
      <span className="search-bar__eyebrow">Найти фильм или сериал</span>
      <div className="search-bar__row">
        <input
          type="text"
          className="search-bar__input"
          placeholder="Например: Joker, Interstellar, Dune…"
          value={ZaprosZnachenie}
          onChange={(e) => SmenitZapros(e.target.value)}
        />
        <button type="submit" className="search-bar__button">
          Искать
        </button>
      </div>
    </form>
  )
}

export default SearchBar