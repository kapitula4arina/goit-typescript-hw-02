import css from './SearchBar.module.css';
import { FormEvent } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import showToast from '../Toasts/toastService';

interface SearchBarProps {
  onSubmit: (newQuery: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const query = (form.elements.namedItem('search') as HTMLInputElement).value;

    if (!query.trim()) {
      showToast('info', 'message');
      return;
    }

    onSubmit(query);
    form.reset();
  };

  return (
    <header className={css.header}>
      <h1 className={css.logo}>
        PicSearcher{' '}
        <svg width={30} height={30}>
          <use xlinkHref="/sprite.svg#icon-fav"></use>
        </svg>
      </h1>
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
