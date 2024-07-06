import css from './SearchBar.module.css';

import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ getImages }) {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target
    const topic = form.elements.search.value.trim();
    if (!topic) {
      toast('The search field can not be empty!', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      return;
    }
    getImages(topic, 1);
    form.reset()
  }
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          name='search'
          type='text'
          autoComplete='off'
          autoFocus
          placeholder='Search images and photos'
          className={css.input}
        />
        <Toaster />
        <button className={css.btnSubmit} type='submit'>
          Search
        </button>
      </form>
    </header>
  );
}
