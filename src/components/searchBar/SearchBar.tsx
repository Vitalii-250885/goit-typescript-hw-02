import { FormEvent, FC, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import toast from 'react-hot-toast';

import css from './SearchBar.module.css';

type SearchBarProps = {
  handleUpdatePage: (query: string) => void;
};

const SearchBar: FC<SearchBarProps> = ({ handleUpdatePage }) => {
  const [query, setQuery] = useState<string>('');

  const hendleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query === '') {
      notification();
      return;
    }

    handleUpdatePage(query);
  };

  const notification = () => toast.error('Для пошуку введіть щось!');

  return (
    <header className={css.header}>
      <form onSubmit={hendleSubmit}>
        <button type="submit" className={css.button}>
          <BiSearch />
        </button>

        <input
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
          onChange={e => setQuery(e.target.value)}
        />
      </form>
    </header>
  );
};

export default SearchBar;
