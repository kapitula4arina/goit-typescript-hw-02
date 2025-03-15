import css from './SearchBar.module.css';
import { IoSearchSharp } from 'react-icons/io5';

import showToast from '../Toasts/toastService';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const query = form.elements.search.value;

    if (!query.trim()) {
      showToast('info', 'message');
      return;
    }

    onSubmit(query);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.searchInput}
        />
        <button type="submit" className={css.buttonSearch}>
          <IoSearchSharp className={css.searchIcon} width={16} height={16} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
