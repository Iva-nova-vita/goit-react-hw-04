export default function SearchBar({ onSubmit }) {
    console.log(onSubmit)
  return (
    <header>
      <form onSubmit={onSubmit}>
        <input
          name='search'
          type='text'
          autoComplete='off'
          autoFocus
          placeholder='Search images and photos'
        />
        <button type='submit'>
          Search
        </button>
      </form>
    </header>
  );
}
