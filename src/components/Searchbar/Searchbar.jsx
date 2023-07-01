
import css from './searchbar.module.css'

export const Searchbar = ({ onSubmit }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      const searchQuery = e.target.elements.searchInput.value;
      onSubmit(searchQuery);
    };
  
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <span className="button-label">Search</span>
          </button>
  
          <input
            id="searchInput"
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  };
  
